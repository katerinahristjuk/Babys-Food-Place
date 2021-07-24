const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    register: async (req, res) => {
    try {
      if (!req.body.password || req.body.password != req.body.repeatPassword) {
            return res.status(400).send({
                error: true,
                message: 'Bad request. Passwords don`t match :('
            })
      } //dali password-ot e vnesen i dali e ist so confirm_pass
       
      const user = await User.findOne({email: req.body.email});
      if (user) {
          return res.status(400).send({
              error: true,
              message: 'This email already exists! :('
          })
      } //dali vo bazata veke postoi vakov email

      req.body.password = bcrypt.hashSync(req.body.password); // encrypts password
      req.body.repeatPassword = bcrypt.hashSync(req.body.repeatPassword); // encrypts password

      await User.create(req.body);
      res.status(201).send({
          error: false,
          message: 'User registered! :)'
      }) // zapis na nov korisnik

    } catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
        })
    }
},

login: async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});

        if(!user) {
            return res.status(400).send({
                error: true,
                message: 'No user with such email :('
            })
        } // dali ima vakov email vo bazata

        if(!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).send({
                error: true,
                message: 'Incorrect password'
            })
        } // proverka megju vneseniot password i password od database

        const payload = { //ona sto se prakja na JWT
            id: user._id,
            email: user.email
        }

        const token = jwt.sign(payload, 'secret_key', {
            expiresIn: '180m'
        }); // token, sto prima payload, i prakja secret key, sto vazi 30 minuti

        res.send({
            error: false,
            message: 'JWT successfully generated',
            token: token
        }) // se isprakja token koj se koristi za pristap do zabraneti ruti

    } catch (error) {
        res.status(500).send({
            error: true,
            message: error.message
        })
    }
},

getUsers: async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).send({
            error: false,
            message: `All users are here:`,
            users
        });
    } catch (error) {
        res.status(404).send({message: error.message});
    }
}

}

