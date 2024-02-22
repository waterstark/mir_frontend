import { makeAutoObservable } from "mobx";

class MessagesStore{

    messageList = {}

    socket = {}

    constructor()
    {
        makeAutoObservable(this);
    }

}

export default new MessagesStore()