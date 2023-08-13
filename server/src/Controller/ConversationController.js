import Conversation from "../Model/Conversation.js";


export const newConversation = async (request, response) => {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})
    
    if(exist) {
        response.status(200).json('conversation already exists');
        return;
    }
    const newConversation = new Conversation({
        members: [senderId, receiverId]
    });

    try {
        const savedConversation = await newConversation.save();
        response.status(200).json(savedConversation);
    } catch (error) {
        response.status(500).json(error);
    }

}