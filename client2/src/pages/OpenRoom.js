import React from 'react';
import './css/OpenRoom.css';
import NavBar from '../components/NavBar';
import OpenRoomItem from '../components/OpenRoomItem';
import TopBar from '../components/TopBar';

const OpenRoom = () => {
    return (
        <div className="OpenRoom">
            <TopBar />
            <OpenRoomItem />
            <NavBar />
        </div>
    );
};

export default OpenRoom;