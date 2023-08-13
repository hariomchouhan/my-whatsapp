import express from "express";
import { addUser, getUsers } from "../Controller/UserController.js";
import { newConversation } from "../Controller/ConversationController.js";

const route = express.Router();

route.post('/add', addUser);
route.get('/users', getUsers);
route.post('/conversation/add', newConversation);

export default route;