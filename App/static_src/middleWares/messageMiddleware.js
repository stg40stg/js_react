import { ADD_MESSAGE } from "../actions/messageAction.js";
import answers from "../answers";
import {addMessage} from "../actions/messageAction.js";

export default store => next => (action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (action.author === 'Me') {
                setTimeout(() =>
                    store.dispatch(addMessage(
                        answers[Math.floor(Math.random() * Math.floor(answers.length))],
                        'Bot',
                        action.chatId)), 1000);
            }
    }
    return next(action)
}
