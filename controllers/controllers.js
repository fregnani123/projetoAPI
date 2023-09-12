
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
};


