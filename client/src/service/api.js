import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async(data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch (error) {
        console.log('Error while addUser API ', error.message);
    }
}

export const getUsers = async() => {
    try {
        const response = await axios.get(`${url}/users`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.log('Error while calling getUsers api ', error.message);
    }
}

export const setConversation = async(data) => {
    try {
        await axios.post(`${url}/conversation/add`, data)
    } catch (error) {
        console.log('Error while calling setConversation api ', error.message);
    }
}

export const getConversation = async(users) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, users)
        return response.data;
    } catch (error) {
        console.log('Error while calling getConversation api ', error.message);
    }
}

export const newMessage = async(data) => {
    try {
        await axios.post(`${url}/message/add`, data)
    } catch (error) {
        console.log('Error while calling newMessage api ', error.message);
    }
}

export const getMessages = async(id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error while calling getMessage api ', error.message);
    }
}