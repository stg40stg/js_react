export const ADD_MESSAGE = '@@message/ADD_MESSAGE';

export const addMessage = (message, author, chatId) => ({
    type: ADD_MESSAGE,
    message,
    author,
    chatId,
});