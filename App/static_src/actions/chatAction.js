export const ADD_CHAT = '@@chat/ADD_CHAT';
export const DELETE_CHAT = '@@chat/DELETE_CHAT';
export const CHAT_HAS_NO_NEW_MESSAGE = '@@chat/CHAT_HAS_NO_NEW_MESSAGE';

export const addChat = (title) => ({
    type: ADD_CHAT,
    title,
});

export const deleteChat = (chat) => ({
    type: DELETE_CHAT,
    chat,
});

export const markAsHasNoNewMessages = (chat) =>({
   type: CHAT_HAS_NO_NEW_MESSAGE,
    chat,
});