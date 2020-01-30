import React from "react";
import answers from "./answers.js";
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
        this.chatContainer = React.createRef();

        this.state = {
            message: '',
            messages:[]
        };
    }

    componentDidUpdate(prevProps, prevState) {
        let messages = [...this.state.messages];
        if (messages.length > 0) {
            if (messages.length > prevState.messages.length) {
                let lastMessage = messages[messages.length - 1];
                if (lastMessage.author === 'user') {
                    setTimeout(() =>
                        this.setState(
                            {
                                messages: [...this.state.messages, {
                                    author: 'bot',
                                    text: answers[Math.floor(Math.random() * Math.floor(answers.length))]
                                }]
                            }
                        ), 1000);
                }
            }
        }
        this.scrollToBottom();
    }
    componentDidMount() {
        this.textInput.current.focus();
    }

    scrollToBottom() {
        if (this.chatContainer.current)
            this.chatContainer.current.scrollTop = this.chatContainer.current.scrollHeight;
    }




    render() {
        return (

            <form className="main" onSubmit={(evt)=> {
                let messages = [...this.state.messages];
                messages.push({author: 'user', text: this.state.message});
                this.setState({
                    message: '',
                    messages: messages
                });
                evt.preventDefault();
            }}>

                <div className="main-window" ref={ this.chatContainer }>
                    {
                        this.state.messages.map((message, index) => {
                            return (<div key={index} className="message" fullWidth={ true } hintText="Введите сообщение"
                                style={{
                                    alignSelf: message.author === 'user' ? 'flex-start' : 'flex-end'
                                    }}>
                                <span className="authorName">{message.author}</span><br/>{message.text}<br/>
                            </div>)
                        })
                    }
                </div>
                <div className="message-wrap">
                <TextField type="text" fullWidth={ true } hintText="Введите сообщение" value={this.state.message}  ref={this.textInput} onChange={(evt) => {
                    this.setState({message: evt.target.value});
                }}/>
                <FloatingActionButton type="submit" className ="sendbutton" mini={true} value="Отправить"><SendIcon /></FloatingActionButton>
                </div>
            </form>
        );
    }
}
