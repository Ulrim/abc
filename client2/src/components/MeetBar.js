import React, { Component } from 'react';
import './css/MeetBar.css';
import { observer, inject } from 'mobx-react';
import GenderList from './sub/GenderList';
import InterestList from './sub/InterestList';

@inject('onoff')
@observer
class MeetBar extends Component {
    render() {
        const { onoff } = this.props;
        return (
        <div className="MeetBar">
            <div 
                className="WishGender"
                onClick={onoff.genderOnOff}
            >
                Wish gender
            </div>
            <div 
                className="Interest"
                onClick={onoff.interestOnOff}
            >
                Interest
            </div>
            <div>
                {onoff.interestValue && <InterestList />}
                {onoff.genderValue && <GenderList />}
            </div>
        </div>
        );
    }
}

export default MeetBar;