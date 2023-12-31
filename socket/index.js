import { Server } from 'socket.io';

const PORT = process.env.SOCKET_SERVER_PORT || 9000;

const io = new Server(PORT, {
    cors: {
        origin: process.env.FRONTED_URL,
    }
})

let users = [];

const addUser = (userData, socketId) => {
    !users.some(user => user.sub == userData.sub) && users.push({ ...userData, socketId });
}

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

io.on('connection', (socket) => {
    console.log(`user connected`);

    socket.on("addUsers", userData => {
        addUser(userData, socket.id);
        io.emit('getUsers', users);
    })

    socket.on("sendMessage", data => {
        const user = getUser(data.receiverId);
        io.to(user.socketId).emit('getMessage', data);
    })

    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
})