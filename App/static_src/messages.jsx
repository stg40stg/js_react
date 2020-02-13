import React from "react";
import PropTypes from 'prop-types';



export default class Messages extends React.Component {
    static propTypes = {
        messages: PropTypes.array.isRequired,
    };

    render() {
        // const { chatId, chats, messages } = this.props;
        //
        // const messageElements = chats[chatId].messageList.map(messageId => (
        //     <Message
        //         key={ messageId }
        //         text={ messages[messageId].text }
        //         sender={ messages[messageId].author }
        //     />
        // ));
        return (
            <div>
                {/*<div>*/}
                {/*    {messageElements}*/}
                {/*</div>*/}
                <div className="main-window" ref={this.chatContainer}>
                    {
                        this.props.messages.map((message, index) => {
                            return (<div key={index} className="message"
                                         style={{
                                             alignSelf: message.author === 'user' ? 'flex-start' : 'flex-end'
                                         }}>
                                <span className="authorName">{message.author}</span><br/>{message.text}<br/>
                            </div>)
                        })
                    }
                </div>

            </div>
        )
    }
}