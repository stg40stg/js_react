import React from "react";
import answers from "./answers.js";

export default class Page extends React.Component {

      constructor(props) {
        super(props);

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
                <div className="main-window">
                    {this.state.messages.map((message, index)=>{
                        return(<div key={index}><span className="authorName">{message.author}</span><br/>{message.text}<br/></div>)
                    })}
                </div>
                <input type="text" cols="300" rows="50" value={this.state.message} onChange={(evt)=>{
                    this.setState({message:evt.target.value});
                }}/>
                <input type="submit" className ="sendbutton" value="Отправить"/>

            </form>
        );
    }
}
