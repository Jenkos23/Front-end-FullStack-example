import axios from "axios";

const apiBackendUrl = 'https://fullstackmern-app-project.onrender.com';
console.log(apiBackendUrl);

const apiService = {
    async getUsers(){
        try{
            const response = await axios.get(`${apiBackendUrl}/users`);
            return response.data;
        } catch (error){
            console.log('Error fetching error', error);
            throw error;

        }


    },

    async createUser(userData) {
        try {
            const response = await axios.post(`${apiBackendUrl}/users/register`, userData);
            return response.data;
        } catch (error) {
            console.log('Error creating user:', error);
            throw error;
        }
    },

    async updateUser(userId, userData) {
        try {
            const response = await axios.put(`${apiBackendUrl}/users/${userId}`, userData);
            return response.data;
        } catch (error) {
            console.error(`Error updating user ${userId}:`, error);
            throw error;
        }
    },

    async deleteUser(userId) {
        try {
            const response = await axios.delete(`${apiBackendUrl}/users/${userId}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting user ${userId}:`, error);
            throw error;
        }
    }




};



export default apiService;