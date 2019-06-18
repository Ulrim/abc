import React from 'react';
import './css/OpenRoomItem.css';

const OpenRoomItem = () => {
    return (
        <div className="OpenRoomItem">
            <div className="OpenRoomImg">
                이미지
            </div>
            <div className="name">
                방 제목
            </div>
            <div className="OpenRoomDesc">
                방 내용fdjsalkfjdasklfjlaksdjfkasdjflasjdasjdlfajsdlfaskldfjaskldfjklasdjfklasjdklasjaskldfjaskldfjfklsajlkajflakjdfskljfalksjdkljfdaskljfkalsjdklajslaskldfjalskdfjlkasfdjlkasdjfklasjflkaslkdfjaskldfjklasdfjklasdjfklasjdfklajdslfjsdalkfjaklsdfj;
            </div>
            <div className="OpenRoomPer">
                <div>현재 접속자 수</div>
                <div>counter</div>
            </div>
        </div>
    );
};

export default OpenRoomItem;