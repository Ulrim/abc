import React, { Component } from 'react';
import './css/InterestList.css';
import { observer, inject } from 'mobx-react';
// import { observable } from 'mobx';

@inject('onoff')
@observer
class InterestList extends Component {
    render() {
        const { onoff } = this.props;
        return (
            <div className="InterestList">
                <div className="main">
                    <div className="close" onClick={onoff.interestOnOff}>
                        <div>close</div>
                    </div>
                    <div className="body">
                        <div>
                            어느것을 고를까요?
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InterestList;