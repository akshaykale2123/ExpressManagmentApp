const userRepository = require("../repositories/repository");

class UserService {

    async getUsers() {
        return await userRepository.getAll();
    }

    async getUserById(id) {
        return await userRepository.getById(id);
    }

    async createUser(data) {
        if (!data.name || !data.email) {
            throw new Error("Name and Email are required");
        }
        return await userRepository.create(data);
    }

    async updateUser(id, data) {
        return await userRepository.update(id, data);
    }

    async deleteUser(id) {
        return await userRepository.delete(id);
    }
    
}

module.exports = new UserService();
