import React, {useEffect, useRef} from 'react';
import NotesAppBar from "./NotesAppBar";
import {useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";

const NoteScreen = () => {
    const {active: note} = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { title, body } = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {
        if(note.id !== activeId.current){
            reset(note);
            activeId.current = note.id;
        }

    }, [note, reset]);

    return (
        <div className={'notes__main-content'}>
            <NotesAppBar/>

            <div className="notes__content">
                <input
                    type="text"
                    placeholder={'Title'}
                    className="notes__title-input"
                    autoComplete={'off'}
                    value={title}
                    onChange={handleInputChange}/>
                <textarea
                    placeholder={'Write some notes'}
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}/>
                {
                    (!!note.url) &&
                    <div className="notes__image">
                        <img src="" alt="logo"/>
                    </div>
                }
            </div>
        </div>
    );
};

export default NoteScreen;
