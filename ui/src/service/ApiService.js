import axios from 'axios';

const USER_API_BASE_URL = `http://192.168.1.163:8001/users`;

class ApiService {

    fetchUsers() {
        console.log(process.env.REACT_APP_EXTERNAL_IP);
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }
 
    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/' + user.id, user);
    }

}

export default new ApiService();
