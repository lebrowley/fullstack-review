const bcrypt = require('bcryptjs')

module.exports= {
    register: async (req, res) => {
        const dbInstance = req.app.get('db')
        const {email, password} = req.body

        const existingUser = await dbInstance.check_user(email)

        if(existingUser[0]) {
            return res.status(409).send('User already exists')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = await dbInstance.register_user([email, hash])

        req.session.user = {
            userId: newUser[0].user_id,
            email: newUser[0].email
        }
        res.status(200).send(req.session.user)
    }, 

    login: async (req, res) => {
        const dbInstance = req.app.get('db')
        const {email, password} = req.body

        const user = await dbInstance.check_user(email)

        if(!user[0]) {
            return res.status(404).send('User does not exist')
        }else {
            const authenticated = bcrypt.compareSync(password, user[0].password)
            if(authenticated) {
                req.session.user = {
                    userId: user[0].user_id,
                    email: user[0].email
                }
                res.status(200).send(req.session.user)
            } else {
                res.status(403).send('Email or password incorrect')
            }
        }
    }, 

    logout: (req, res) => {
        req.session.destroy()    // a method on express-session
        res.sendStatus(200)
    },

    getUser: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.sendStatus(404)
        }
    }
}