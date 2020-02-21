import update from 'react-addons-update';
import { ADD_MESSAGE } from '../actions/messageAction.js';
import { ADD_CHAT } from "../actions/chatAction.js";
import Chat from "../models/Chat";
import Message from "../models/Message";
import greeting from "../greeting";
import {DELETE_CHAT} from "../actions/chatAction";
import {DELETE_MESSAGE} from "../actions/messageAction";


const initialStore = {
    chats: [
        new Chat(1, 'Чат 1', [new Message(1, 'bot Alex', greeting[Math.floor(Math.random() * Math.floor(greeting.length))])]),
        new Chat(2, 'Чат 2', [new Message(1, 'bot Max', greeting[Math.floor(Math.random() * Math.floor(greeting.length))])]),
        new Chat(3, 'Чат 3', [new Message(1, 'bot Michael', greeting[Math.floor(Math.random() * Math.floor(greeting.length))])])
    ]
};

export default function chatReducer(store = initialStore, action,) {
    switch (action.type) {
        case ADD_MESSAGE: {
            let chats = [...store.chats];

            let currentChat = undefined;
            for (let chat of chats){
                if (chat.id === action.chatId)
                    currentChat = chat;
            }

            let chat = Object.assign({}, currentChat, {messages: [...currentChat.messages]});
            let newId = 0;
            for (let message of chat.messages){
                newId = Math.max(newId, message.id);
            }

            chat.messages.push(new Message(newId + 1, action.author, action.message));
            for (let i = 0; i < chats.length; i++){
                if (chats[i].id === chat.id){
                    chats[i] = chat;
                    break;
                }
            }
            return {
                chats: chats
            }
        }

        case DELETE_MESSAGE: {
            let currentChat;
            for (let chat of store.chats){
                if (chat.id === action.chatId)
                    currentChat = chat;
            }

            let messages = [...currentChat.messages];
            for (let i = 0; i < messages.length; i++){
                if (messages[i].id === action.messageId){
                    messages.splice(i,1);
                    break;
                }
            }

            let chats = [...store.chats];
            let chat = Object.assign({}, currentChat, {messages: [...messages]});
            for (let i = 0; i < chats.length; i++){
                if (chats[i].id === chat.id){
                    chats[i] = chat;
                    break;
                }
            }

            return {
                chats: chats
            }
        }

        case ADD_CHAT: {
            let chats = [...store.chats];
            let newId = 0;
            for (let chat of chats){
                newId = Math.max(newId, chat.id);
            }

            let newChat =  new Chat(newId + 1, action.title);
            chats.push(newChat);
            return {
                chats: chats
            }
        }
        case DELETE_CHAT: {
            let chats = [...store.chats];
            for (let i = 0; i < chats.length; i++){
                if (chats[i].id === action.chat.id){
                    chats.splice(i,1);
                    break;
                }
            }

            return {
                chats: chats
            }
        }
        default:
            return store;
    }
}
