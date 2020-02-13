import React from 'react';
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { addChat } from './actions/chatAction.js';

class ChatList extends React.Component {

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
const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);




