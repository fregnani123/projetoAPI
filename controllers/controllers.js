import express from 'express'

const controllers = {

   findUsers:async (req, res) => {
        const users = await User.find()
        return res.json(users)
    }
}