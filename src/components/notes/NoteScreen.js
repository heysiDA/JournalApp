import React from 'react';
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
    return (
        <div className={'notes__main-content'}>
            <NotesAppBar/>

            <div className="notes__content">
                <input
                    type="text"
                    placeholder={'Title'}
                    className="notes__title-input"
                autoComplete={'off'}/>
                <textarea
                    placeholder={'Write some notes'}
                    className="notes__textarea"/>
                
                <div className="notes__image">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="logo"/>
                </div>
            </div>
        </div>
    );
};

export default NoteScreen;
