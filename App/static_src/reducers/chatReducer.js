import update from 'react-addons-update';
import { ADD_MESSAGE } from '../actions/messageAction.js';
import { ADD_CHAT } from "../actions/chatAction.js";
import Chat from "../models/Chat";
import Message from "../models/Message";
import greeting from "../greeting";


const initialStore = {
    chats: [
        new Chat(1, 'Чат 1', [new Message(1, 'bot Alex', greeting[Math.floor(Math.random() * Math.floor(greeting.length))])]),
        new Chat(2, 'Чат 2', [new Message(2, 'bot Max', greeting[Math.floor(Math.random() * Math.floor(greeting.length))])]),
        new Chat(3, 'Чат 3', [new Message(3, 'bot Michael', greeting[Math.floor(Math.random() * Math.floor(greeting.length))])])
    ]
};

export default function chatReducer(store = initialStore, action,) {
    switch (action.type) {
        case ADD_MESSAGE: {
            let chats = [...store.chats];
            let currentChat = chats[action.chatId];
            let chat = Object.assign({}, currentChat, {messages: [...currentChat.messages]});
            chat.messages.push(new Message(chat.messages.length + 1, action.author, action.message));
            chats[action.chatId] = chat;
            return {
                chats: chats
            }
        }

        case ADD_CHAT: {
            let chats = [...store.chats];
            let newChat =  new Chat(chats.length + 1, action.title);
            chats.push(newChat);
            return {
                chats: chats
            }
        }
        default:
            return store;
    }
}
