import {db} from "../firebase/firebase-config";
import Swal from "sweetalert2";
import {types} from "../types/types";
import {loadNotes} from "../helpers/loadNotes";
import {fileUpload} from "../helpers/fileUpload";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
            url: ''
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(activeNote(doc.id, newNote));
     }
}

export const activeNote = (id, note) => ({
  type: types.noteActive,
  payload: {
      id,
      ...note
  }
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
      const notes = await loadNotes(uid);
      dispatch(setNotes(notes));
  }
}


export const setNotes = (notes) => ({
  type: types.noteLoad,
  payload: notes
})


export const startSaveNote = (note) => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;
        console.log(uid)
        if(!note.url){
            delete note.url;
        }
        const noteToSave = {...note}
        delete noteToSave.id;

        await db.collection(`${uid}/journal/notes`).doc(note.id).update(noteToSave);
        dispatch(refreshNote(note.id, note))
        Swal.fire(
            'Saved',
            note.title,
            "success"
        )
    }
}

export const refreshNote = ( id, note ) => ({
  type: types.noteUpdated,
  payload: {
      id,
      note
  }
});

export const startUpdateUrl = (file) => {
    return async (dispatch, getState) => {
       const {active: note} = getState().notes;
       Swal.fire({
           title: 'Uploading...',
           text: 'Please wait...',
           allowOutsideClick: false,
           didOpen: ()=>{
               Swal.showLoading();
           }
         }
       );
        note.url = await fileUpload(file);
        dispatch(startSaveNote(note));

        Swal.close();
    }
}
