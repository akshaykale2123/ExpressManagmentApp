const userService = require("../services/service");

class UserController {
    
    async getUsers(req, res, next) {
        try {
            const users = await userService.getUsers();
            res.json(users);
        } catch (err) {
            next(err);
        }
    }

    async getUser(req, res, next) {
        try {
            const user = await userService.getUserById(req.params.id);
            if (!user) return res.status(404).json({ message: "User not found" });
            res.json(user);
        } catch (err) {
            next(err);
        }
    }

    async createUser(req, res, next) {
        try {
            const newUser = await userService.createUser(req.body);
            res.status(201).json(newUser);
        } catch (err) {
            next(err);
        }
    }

    async updateUser(req, res, next) {
        try {
            const updatedUser = await userService.updateUser(req.params.id, req.body);
            res.json(updatedUser);
        } catch (err) {
            next(err);
        }
    }

    async deleteUser(req, res, next) {
        try {
            const result = await userService.deleteUser(req.params.id);
            res.json(result);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new UserController();
