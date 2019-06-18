import React from 'react';
import { Link } from 'react-router-dom';
import './css/MeetSelect.css';

const MeetSelect = () => {
    return (
        <div className="MeetSelect">
            <Link to="/meet/text" className="MeetText">
                <div>
                    Text
                </div>
            </Link>
            <Link to="/meet/voice" className="MeetVoice">
                <div>
                    Voice
                </div>
            </Link>
        </div>
    );
};

export default MeetSelect;