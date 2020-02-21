import React from "react";
import PropTypes from 'prop-types';
import Messages from "./messages.jsx";
import {FloatingActionButton, TextField} from "material-ui";
import SendIcon from "material-ui/svg-icons/content/send";
import {bindActionCreators} from "redux";
import {addMessage} from "./actions/messageAction";
import {connect} from "react-redux";

class CurrentChat extends React.Component {
    static propTypes = {
        chat: PropTypes.object
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
        if (this.textInput.current) {
            this.textInput.current.focus();
        }
    }

    scrollToBottom() {
        if (this.chatContainer.current)
            this.chatContainer.current.scrollTop = this.chatContainer.current.scrollHeight;
    }

    render() {
        if (this.props.chat) {
            return (
                <div className="form-wrap">
                    <form className="main" onSubmit={(evt) => {
                        this.props.addMessage(this.state.message, 'Me', this.props.chat.id);
                        this.setState({
                            message: '',
                        });
                        evt.preventDefault();
                    }}>

                        <Messages
                            chat={this.props.chat}
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
        else {
            return null;
        }
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CurrentChat);
