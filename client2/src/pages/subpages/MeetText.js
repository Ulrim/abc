import React from 'react';
import openSocket from 'socket.io-client';
import { observer, inject } from 'mobx-react';

const socket = openSocket.connect('http://localhost:8080');

@inject('state')
@observer
class ChatForm extends React.Component {
    // constructor (props) {
    //     super(props);
    //     this.state = { name: '', message: '' }
    // }
    //   nameChanged (e) {
    //     this.setState({name: e.target.value})
    //   }
    //   messageChanged (e) {
    //     this.setState({message: e.target.value})
    //   }
      // 서버에 이름과 메시지 전송 --- (※3)
      send (e) {
        e.preventDefault();

        socket.emit('chat-msg', {
          name: this.props.state.user,
          message: this.props.state.message
        })
        this.setState({message: ''}) // 입력 양식을 비웁니다.
      }
      render () {
          const { state } = this.props;

        return (
          <div>
              <form>
              이름: {state.user}<br />
            {/* <input value={state.user}
              onChange={e => state.setUser(e.target.value)} /><br /> */}
            메시지:<br />
            <input value={state.message}
              onChange={e => state.setMessage(e.target.value)} /><br />
            {/* <button onClick={state.send(socket)}>전송</button> */}
                <button onClick={e => this.send(e)}>전송</button>
              </form>
          </div>
        )
      }
}

// 채팅 애플리케이션의 메인 컴포넌트를 정의합니다. --- (※4)
class ChatApp extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        logs: []
      }
    }
    // 컴포넌트가 마운트됐을 때 --- (※5)
    componentDidMount () {
      // 실시간으로 로그를 받게 설정
      socket.on('chat-msg', (obj) => {
        const logs2 = this.state.logs
        obj.key = 'key_' + (this.state.logs.length + 1)
        console.log(obj)
        logs2.unshift(obj) // 로그에 추가하기
        this.setState({logs: logs2})
      })
    }
    render () {
      // 로그를 사용해 HTML 요소 생성 --- (※6)
      const messages = this.state.logs.map(e => (
        <div key={e.key}>
          <span>{e.name}</span>
          <span >: {e.message}</span>
        </div>
      ))
      const styles = {
          ex02: {
            border: '1px solid black',
            width: 100,
            height: 500,
          }
      }
      return (
        <div style={
            styles.ex02
        }>
        <h1>실시간 채팅</h1>
        <div>{messages.reverse()}</div>
          <ChatForm />
        </div>
      )
    }
  }

const MeetText = () => {
    const styles = {
        ex01: {
            border: '1px solid black',
            width: 100,
            height: 500
        }
    }
    return (
        <div>
            <h1>MeetText</h1>
            <div style={
                styles.ex01
            }>
                <ChatApp />
            </div>
        </div>
    );
};

export default MeetText;