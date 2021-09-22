import React from 'react';

const NothingSelected = () => {
    return (
        <div className={'nothing__main-content'}>
            <p className={'mb-5'}>
                Select something
                <br/>
                please create an entry!
            </p>
            <i className={'far fa-star fa-4x'}/>
        </div>
    );
};

export default NothingSelected;
