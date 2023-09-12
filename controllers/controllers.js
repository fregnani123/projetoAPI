
const User = require('../models/NewUser')

module.exports = {

    findUsers: async (req, res) => {
        const users = await User.find();
        return res.json(users);
    },

    findOne: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await User.findOne({ _id: id });
            res.json(user);
        } catch (error) {
            console.log(error);
        }
    },

    deleteUsers: async (req, res) => {
        const usersName = req.params.name;
        try { const user = await User.findOneAndDelete({name:usersName})
            res.json(user)
        } catch(error) {
            console.log(error);
        }
    },
    
    createUsers: async (req, res) => {
        const newUsers = req.body
        try {
            const user = await User.create(newUsers);
            res.json(user);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error: 'Erro ao criar o usuário' });
        }
    }
};


