import MessagesStore from '../store/messages'

export default class MessageService
{
    static async connect()
    {
        const socket = new WebSocket('ws://localhost:8000/chat/ws');

        socket.onopen = () => {
            console.log('ws/ connected')
        }

        socket.onerror = (err) => {
            console.log(err)
        }

        socket.onmessage = (message) => {
            console.log(message)
        }

        socket.addEventListener("message", (e) => 
        {
            console.log(e);
        })

        socket.onclose = (e) => {
            console.log(e);
        }

        MessagesStore.socket = socket;
    }

    static async sendMessage(matchId, destinationId, senderId, msgText)
    {
        const msg = {
            match_id: matchId,
            to_id: destinationId,
            from_id: senderId,
            text: msgText
        }

        console.log(msg)    

        MessagesStore.socket.send(JSON.stringify({
            action: "CREATE",
            message: msg
        }))
    }


}