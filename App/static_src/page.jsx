import React from "react";

export default class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            messages:[]
        };
    }

    render() {
        return (
            <form className="main" onSubmit={(evt)=> {
                let messages = [...this.state.messages];
                messages.push(this.state.message);
                this.setState({
                    message: '',
                    messages: messages
                });
                evt.preventDefault();
            }}>
                <div className="main-window">
                    {this.state.messages.map((message)=>{
                        return(<div>{message}</div>)
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
