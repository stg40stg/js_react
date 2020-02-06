import React from "react";
import PropTypes from 'prop-types';
import Messages from "./messages.jsx";
import {FloatingActionButton, TextField} from "material-ui";
import SendIcon from "material-ui/svg-icons/content/send";
import Header from "./header.jsx";

export default class CurrentChat extends React.Component {
    static propTypes = {
        chat: PropTypes.object.isRequired,
        addMessage: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.chatContainer = React.createRef();

    }

    state = {
      message: ''
    };



    // componentDidUpdate(prevProps, prevState) {
    //     let messages = [...this.state.messages];
    //     if (messages.length > 0) {
    //         if (messages.length > prevState.messages.length) {
    //             let lastMessage = messages[messages.length - 1];
    //             if (lastMessage.author === 'user') {
    //                 setTimeout(() =>
    //                     this.setState(
    //                         {
    //                             messages: [...this.state.messages, {
    //                                 author: 'bot',
    //                                 text: answers[Math.floor(Math.random() * Math.floor(answers.length))]
    //                             }]
    //                         }
    //                     ), 1000);
    //             }
    //         }
    //     }
    //     this.scrollToBottom();
    // }

    componentDidMount() {
        this.textInput.current.focus();
    }

    scrollToBottom() {
        if (this.chatContainer.current)
            this.chatContainer.current.scrollTop = this.chatContainer.current.scrollHeight;
    }
    // sendMessage = (message, author) => {
    //     const { messages, chats } = this.state;
    //     const { chatId } = this.props;
    //
    //     const messageId = Object.keys(messages).length + 1;
    //     this.setState({
    //         messages: {...messages,
    //             [messageId]: {text: message, author: author}},
    //         chats: {...chats,
    //             [chatId]: { ...chats[chatId],
    //                 messageList: [...chats[chatId]['messageList'], messageId]
    //             }
    //         },
    //     })
    // };

    render() {
        return (
            <div>
                <Header title={this.props.chat.name}/>
                <form className="main" onSubmit={(evt) => {
                    this.props.addMessage(this.state.message);
                    this.setState({
                        message: '',
                    });
                    evt.preventDefault();
                }}>

                    <Messages
                        messages={this.props.chat.messages}
                    />
                    <div className="message-wrap">
                        <TextField type="text" hintText="Введите сообщение" value={this.state.message}
                                   ref={this.textInput} onChange={(evt) => {
                                       this.setState({message: evt.target.value});
                        }}/>
                    </div>
                    <FloatingActionButton type="submit" className="sendButton" mini={true}
                                          value="Отправить"><SendIcon/></FloatingActionButton>
                </form>
            </div>
        );
    }
}
