import React from 'react';

const JournalEntry = () => {
    return (
        <div className={'journal__entry pointer'}>
            <div className={'journal__entry-picture'}
            style={{
                backgroundSize: 'cover',
                backgroundImage: 'url(https://images.pexels.com/photos/1136575/pexels-photo-1136575.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)'
            }}/>
            <div className={'journal__entry-body'}>
                <p className={'journal__entry-title'}>
                    hhjshcbd
                </p>
                <p className={'journal__entry-content'}>
                    Lorem ipsum dolor sit amet, consectetur.
                </p>
            </div>
            <div className={'journal__date-box'}>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};

export default JournalEntry;
