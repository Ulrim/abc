import React, { Component } from 'react';
import MeetBar from '../components/MeetBar';
import MeetSelect from '../components/MeetSelect';
import NavBar from '../components/NavBar';
import './css/Meet.css';
import TopBar from '../components/TopBar';
import Adv from '../components/Adv';
import { inject, observer } from 'mobx-react';

@inject('state')
@observer
class Meet extends Component {
    render() {
        const { state } = this.props;

        return(
        <div className="Meet">
            <div>
                <TopBar />
            </div>
            <div className="MeetDisplay">
                <MeetSelect />
                <MeetBar />
                <input 
                    onChange={e => state.setUser(e.target.value)}
                />
            </div>
            <Adv />
            <NavBar />
        </div>
        );
    }
}

// const Meet = () => {
//     return(
//         <div className="Meet">
//             <div>
//                 <TopBar />
//             </div>
//             <div className="MeetDisplay">
//                 <MeetSelect />
//                 <MeetBar />
//             </div>
//             <Adv />
//             <NavBar />
//         </div>
//     );
// };

export default Meet;