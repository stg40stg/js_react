import React from "react";
import PropTypes from 'prop-types';
import MessageDelete from "material-ui/svg-icons/navigation/close";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { deleteMessage} from "./actions/messageAction";



class Messages extends React.Component {
    static propTypes = {
        chat: PropTypes.object.isRequired,
    };

    handleDeleteMessage = (message) => {
        this.props.deleteMessage(this.props.chat.id, message.id);
    };

    render() {

        return (
            <div>
                <div className="main-window" ref={this.chatContainer}>
                    {
                        this.props.chat.messages.map((message, index) => {
                            return (<div key={index} className="message"
                                         style={{
                                             alignSelf: message.author === 'Me' ? 'flex-start' : 'flex-end'
                                         }}>
                                <MessageDelete className="deleteButton" onClick={ () => this.handleDeleteMessage(message) }/>
                                <span className="authorName">{message.author}</span><br/>{message.text}<br/>
                            </div>)
                        })
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ chatReducer }) => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({ deleteMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Messages);