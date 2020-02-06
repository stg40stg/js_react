import React from 'react';
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';
import PropTypes from "prop-types";

export default class ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.array.isRequired,
        addChat: PropTypes.func.isRequired,
    };

    state = {
        input: '',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleAddChat = () => {
        if (this.state.input.length > 0) {
            this.props.addChat(this.state.input);
            this.setState({ input: '' });
        }
    };

    render() {
        console.log(this.props.chats);
        const chatElements = this.props.chats.map(chat => {
            return <Link key={ chat.id } to={ `/chat/${chat.id}` }>
                <ListItem
                    primaryText={ chat.name }
                    leftIcon={ <ContentSend /> } />
            </Link>});

        return (
            <List>
                { chatElements }
                <ListItem key={"addChatItem"}
                    leftIcon={ <AddIcon /> }
                    onClick={ this.handleAddChat }
                    style={ { height: '60px' } }
                    children= {<TextField
                        key={"TextField"}
                        name="titleInput"
                        hintText="Добавить новый чат"
                        onChange={ this.handleChange }
                        value={ this.state.input }
                    />}
                />
            </List>
        )
    }
}




