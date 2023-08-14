import express from "express";
import { addUser, getUsers } from "../Controller/UserController.js";
import { getConversation, newConversation } from "../Controller/ConversationController.js";
import { getMessages, newMessage } from "../Controller/MessageController.js";

const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUsers);
route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessages);

export default route;