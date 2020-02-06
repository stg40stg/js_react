import React from "react";
import PropTypes from 'prop-types';

export default class Messages extends React.Component {
    static propTypes = {
        messages: PropTypes.array.isRequired,
    };

    render() {
        return (
            <div className="messages">
                <div className="main-window">
                    {
                        this.props.messages.map((message, index) => {
                            return (<div key={index} className="message"
                                         style={{
                                             alignSelf: message.author === 'Me' ? 'flex-start' : 'flex-end'
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