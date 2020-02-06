import React from "react";
import ChatList from "./chatList.jsx";
import CurrentChat from "./currentChat.jsx";
import Header from "./header.jsx";
import greeting from "./greeting.js";
import Chat from "./models/Chat.js";
import Message from "./models/Message.js";
import PropTypes from "prop-types";
import answers from "./answers.js";


export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };

    static defaultProps = {
        chatId: 1,
    };

    state = {
        chats: [
            new Chat(1, 'Чат 1', [new Message(1, 'bot Alex', greeting[Math.floor(Math.random() * Math.floor(greeting.length))])]),
            new Chat(2, 'Чат 2', [new Message(2, 'bot Max', greeting[Math.floor(Math.random() * Math.floor(greeting.length))])]),
            new Chat(3, 'Чат 3', [new Message(3, 'bot Michael', greeting[Math.floor(Math.random() * Math.floor(greeting.length))])])
        ]
    };

    addChat = (title) => {
        let chats = [...this.state.chats];
        let newChat =  new Chat(chats.length + 1, title);
        chats.push(newChat);

        this.setState({
            chats: chats
        })
    };

    addMessage = (author, message) => {
        let chats = [...this.state.chats];
        let currentChat = chats[this.props.chatId - 1];
        let chat = Object.assign({}, currentChat, {messages: [...currentChat.messages]});
        chat.messages.push(new Message(chat.messages.length + 1, author, message));
        chats[this.props.chatId - 1] = chat;
        this.setState({chats: chats});
    };

    componentDidUpdate(prevProps, prevState, undefined) {
        let chat = this.state.chats[this.props.chatId - 1];
        console.log(chat);
        if (chat.messages.length > 0) {
            let prevChat = prevState.chats[this.props.chatId -1];
            console.log(prevChat);
            if (chat.messages.length > prevChat.messages.length) {
                let lastMessage = chat.messages[chat.messages.length - 1];
                if (lastMessage.author === 'Me') {
                    setTimeout(() =>
                            this.addMessage('', answers[Math.floor(Math.random() * Math.floor(answers.length))])
                        , 1000);
                }
            }
        }
    }

    render() {
        return (
            <div className="Layout">
                <Header/>
                <div className="Layout-wrap">
                    <ChatList
                        chats={ this.state.chats }
                        addChat={ this.addChat }
                    />
                    <CurrentChat chat = {this.state.chats[this.props.chatId - 1]} addMessage={(message) =>this.addMessage('Me', message)}/>
                </div>
            </div>
        );
    }
}






