import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Room extends Component {
    state = { message: null, loading: true, sending: false }

    componentDidMount() {
        // TODO: fetch room by this.props.roomId and update room data by this.props.update
        // TODO: listen to server message event and append messages by this.props.appendMessage
        // TODO: listen to server users update event and update users by this.props.update
        setTimeout(() => {
            this.setState(state => ({...state, loading: false}))
            this.inputMessageInputRef.focus()
            // this.props.update( ... )
        }, 500);
    }

    // srcollMessagesContainerToBottom = () => {
    //     // smooth scroll
    //     if (this.messagesContainerRef.scrollIntoView) {
    //         const lastMessageRef = this.messagesContainerRef.lastElementChild.lastElementChild;
    //         if (lastMessageRef && lastMessageRef.scrollIntoView) {
    //             lastMessageRef.scrollIntoView({
    //                 behavior: 'smooth'
    //             })
    //             return;
    //         }

    //         // fallback
    //         this.messagesContainerRef.scrollTo(0, this.messagesContainerRef.scrollHeight);
    //     }
    // }

    setMessage = (message) => {
        this.setState(state => ({...state, message}))
    }

    submit = (e) => {
        e.preventDefault();
        // TODO: send message to server

        if (this.state.sending) return;

        const message = this.state.message && this.state.message.trim();
        if (!message) return;

        this.setState(state => ({...state, sending: true}));

        setTimeout(() => {
            this.props.room.appendMessage({
                id: this.props.room.messages.length + 1000,
                user: JSON.parse(JSON.stringify(this.props.user)),
                content: message,
                at: parseInt((new Date).getTime()/1000),
            })
            this.setState(state => ({...state, message: null}))
            // this.srcollMessagesContainerToBottom();

            // forbide too much talker
            setTimeout(() => {
                this.setState(state => ({...state, sending: false}))
            }, 500)
        }, 200);
    }

    render() {
        const { room } = this.props;

        return (
            <div className="chat-room">
                <h1>{this.state.loading && !room ? '불러오는 중...' : room && room.title }</h1>
                <div className="chat-room-message">
                    <ul>
                        {room && room.messages.map(message => (
                            <li key={message.id}>
                                <span>
                                    <img src={message.user.avatarUrl} width={20} />
                                    <span>{message.user.nickname}</span>
                                    <small>{message.at.toLocaleString()}</small>
                                </span>
                                <p>{message.content}</p>
                            </li>
                        ))}
                        <li>
                            <form onSubmit={this.submit}>
                                <input
                                    ref={ref => this.inputMessageInputRef = ref}
                                    value={this.state.message}
                                    onChange={e => this.setMessage(e.target.value)}
                                    disabled={this.state.loading}
                                    placeholder='메세지를 입력하세요.'
                                />
                            </form>
                        </li>
                    </ul>
                    <button onClick={this.props.exit}>나가기</button>
                </div>
                <div className='chat-room-users'>
                    <ul>
                        {room && room.users.map(user => (
                            <li key={user.id}>
                                <img src={user.avatarUrl} width={20} />
                                <span>{user.nickname}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Room;