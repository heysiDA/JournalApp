import React, {useEffect, useRef} from 'react';
import NotesAppBar from "./NotesAppBar";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";
import {activeNote} from "../../actions/notes";

const NoteScreen = () => {
    const {active: note} = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { title, body } = formValues;
    const dispatch = useDispatch();

    const activeId = useRef(note.id);

    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id;
        }

    }, [note, reset]);

    useEffect(() => {
        dispatch(activeNote(formValues.id, {...formValues}));
    }, [formValues, dispatch]);

    return (
        <div className={'notes__main-content'}>
            <NotesAppBar/>

            <div className="notes__content">
                <input
                    type="text"
                    name="title"
                    placeholder={'Title'}
                    className="notes__title-input"
                    autoComplete={'off'}
                    value={title}
                    onChange={handleInputChange}/>
                <textarea
                    name="body"
                    placeholder={'Write some notes'}
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}/>
                {
                    (!!note.url) &&
                    <div className="notes__image">
                        <img src={note.url} alt="logo"/>
                    </div>
                }
            </div>
        </div>
    );
};

export default NoteScreen;
