import React from 'react';
import { List, ListItem } from 'material-ui/List';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDelete from 'material-ui/svg-icons/content/delete-sweep';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { addChat, deleteChat, markAsHasNoNewMessages } from './actions/chatAction.js';
import { push } from 'connected-react-router';


class ChatList extends React.Component {

    static propTypes = {
        push: PropTypes.func.isRequired,
    };

    state = {
        titleInput: '',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleAddChat = () => {
        if (this.state.titleInput.length > 0) {
            this.props.addChat(this.state.titleInput);
            this.setState({ titleInput: '' });
        }
    };

    handleDeleteChat = (chat) => {
        this.props.deleteChat(chat);
    };

    handleNavigate = (link) => {
        this.props.push(link);
    };



    render() {
        const chatElements = this.props.chats.map(chat => {
            if (chat.hasNewMessages){
                setTimeout( () => {
                    this.props.markAsHasNoNewMessages(chat);
                },10000)
            }

            return <ListItem className={(chat.hasNewMessages ? 'blink' : '')}
                key = {chat.id}
                primaryText={ chat.name }
                leftIcon={ <ContentSend onClick={ () => this.handleNavigate(`/chat/${chat.id}`) }/> }
                rightIcon={ <ContentDelete onClick={ () => this.handleDeleteChat(chat) }/>}
            />});

        return (
            <List>
                { chatElements }
                <ListItem key={"addChatItem"}
                          leftIcon={ <AddIcon onClick={this.handleAddChat }/> }
                          style={ { height: '60px' } }
                          children= {<TextField
                              key={"TextField"}
                              name="titleInput"
                              hintText="Добавить новый чат"
                              onChange={ this.handleChange }
                              value={ this.state.titleInput }
                          />}
                />
            </List>
        )
    }
}
const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat, deleteChat, push, markAsHasNoNewMessages }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);




