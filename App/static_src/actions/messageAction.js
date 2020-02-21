export const ADD_MESSAGE = '@@message/ADD_MESSAGE';
export const DELETE_MESSAGE = '@@message/DELETE_MESSAGE';

export const addMessage = (message, author, chatId) => ({
    type: ADD_MESSAGE,
    message,
    author,
    chatId,
});

export const deleteMessage = (chatId, messageId) => ({
    type: DELETE_MESSAGE,
    chatId,
    messageId,
});