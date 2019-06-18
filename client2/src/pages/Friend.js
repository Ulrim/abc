import React from 'react';
import NavBar from '../components/NavBar';
import FriendItem from '../components/sub/FriendItem';
import TopBar from '../components/TopBar';
import './css/Friend.css';
import Adv from '../components/Adv';

const Friend = () => {
    return (
        <div className="Friend">
            <div>
                <TopBar />
            </div>
            <div className="FriendList">
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <FriendItem />
                <Adv />
            </div>

            <NavBar />
        </div>
    );
};

export default Friend;