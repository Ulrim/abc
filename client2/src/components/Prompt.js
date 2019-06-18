import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { avatarUrls } from '../core/data';

@observer
class Prompt extends Component {
    state = { loading: false, avatarUrl: avatarUrls[0], nickname: null};

    setAvatarUrl = (avatarUrl) => {
        if (this.state.loading) return;
        this.setState(state => ({...state, avatarUrl}));
        this.nicknameInputRef.focus();
    }

    setNickname = (nickname) => {
        if (this.state.loading) return;
        this.setState(state => ({...state, nickname}));
    }

    submit = (e) => {
        e.preventDefault();

        const { avatarUrl, nickname, loading } = this.state;
        if (loading || !nickname.trim()) return;

        this.setState(state => ({...state, loading: true}));
        
        // TODO: login as and set this.props.state.user
        // setTimeout(() => {
        //     this.props.setUser({ id: 9999, nickname, avatarUrl});
        // }, 500);
        this.props.login({ nickname, avatarUrl })
    }

    componentDidMount() {
        this.setState(state => ({
            ...state, 
            nickname: '손님' + parseInt((new Date).getTime()).toString().substr(-4)}));
        this.nicknameInputRef.focus();
    }

    render() {
        return (
            <div className='chat-prompt'>
                <h1>PROMPT</h1>
                <form
                    loading={this.state.loading} 
                    onSubmit={this.login}
                >
                    <div>
                        <input
                            ref={ref => this.nicknameInputRef = ref}
                            type='text'
                            value={this.state.nickname}
                            placeholder='이름을 입력하세요'
                            onChange={(e) => this.setNickname(e.target.value)}
                        />
                    </div>
                    <div>
                        <ul>
                            {avatarUrls.map((avatarUrl, key) => (
                                <li key={key}>
                                    <img
                                        src={avatarUrl}
                                        width={this.state.avatarUrl === avatarUrl ? 80 : 40}
                                        onClick={() => this.setAvatarUrl(avatarUrl)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <button 
                            onClick={this.submit}
                        >
                        입장하기
                        </button>    
                        {/* <input
                            type='submit'
                            onClick={this.submit}
                            value='입장하기'
                            disabled={this.state.loading}
                        /> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default Prompt;