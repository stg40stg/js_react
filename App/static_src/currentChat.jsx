import React from "react";
import PropTypes from 'prop-types';
import Messages from "./messages.jsx";
import {FloatingActionButton, TextField} from "material-ui";
import SendIcon from "material-ui/svg-icons/content/send";

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

    componentDidUpdate(prevProps, prevState, snapshot) {
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
            <div className="form-wrap">
                <form className="main" onSubmit={(evt) => {
                    this.props.addMessage(this.state.message);
                    this.setState({
                        message: '',
                    });
                    evt.preventDefault();
                }}>

                    <Messages
                        messages={this.props.chat.messages}
                        ref={this.chatContainer}
                    />
                    <div className="message-wrap">
                        <TextField type="text" hintText="Введите сообщение" value={this.state.message}
                                   ref={this.textInput} onChange={(evt) => {
                            this.setState({message: evt.target.value});
                        }}/>
                        <FloatingActionButton type="submit" className="sendButton" mini={true}
                                   value="Отправить"><SendIcon/></FloatingActionButton>
                    </div>
                </form>
            </div>
        );
    }
}
