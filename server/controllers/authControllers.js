const User = require('../../database/model/user.model');

const jwt = require('jsonwebtoken');
const validator = require('email-validator');

const singin = async (req, res) => {
    let { email, password} = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('email does not exist');
        }
        user.comparePassword(password, (err, match) => {
            if (!match || err) return res.status(400).send('password does not match');
            let token = jwt.sign(
                {_id:user.id},'ogjroeignzmeoioiehg',
                 { expiresIn:'24h',
                });
                res.status(200).send({
                    token,
                    username:user.username,
                    email:user.email,
                    id: user._id,
                    createdAt : user.createdAt,
                    updatedAt : user.updatedAt,

                });
        });

    } catch (error) {return res.status(400).send('login failed') }
};

const register = async (req, res) => {
    console.log('Request Body:', req.body);
    if (!req.body) {
        return res.status(400).json({ error: "Request body is empty or undefined." });
    }
    const { email, password, username } = req.body;
    try {
        if (!username) return res.status(400).send('username is required');

        if (!email) return res.status(400).send('email is required');

        if (!validator.validate(email)) {
            return res.status(400).send('email is required');
        }

        if (!password || password.length < 6) {
            return res.status(400).send('enter  valid password');
        }
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).send('email is taken')
        }


        const User = await new User({
            email, username, password,
        });

        await User.save();
        return res.status(200).send(User);
    } catch (error) {
        return res, statusbar(400).send('Error creating user');
    }
};
module.exports = {
    singin,
    register,
};
  
