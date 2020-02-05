export default class Chat {
    constructor(id, name, messages = []) {
        this.id = id;
        this.name = name;
        this.messages = messages;
    }
}