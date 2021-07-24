const User = require('../models/userModel');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
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

        const newUser = await User.create(req.body);
        res.status(201).send({
            error: false,
            message: `User ${req.body.email} registered! :)`,
            newUser
         }) // zapis na nov korisnik
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`);    
    }
};

const login = async (req, res) => {
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
                message: 'Incorrect password :('
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
        res.status(500).send(`Internal server error: ${error}`);    
    }
}

const getUsers = async (req, res) => {
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
};

const showOneUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);

        res.status(200).send({
            error: false,
            message: `User ${userId} is here :)`,
            user
        });
    } catch (error) {
      res.status(500).send(`Internal server error: ${error}`);  
    }
};

const updateUser = async (req, res) => {
    const { userId } = req.params; 

    if(!mongoose.Types.ObjectId.isValid(userId)){
        return res.status(404).send(`No user with id: ${userId}`);
    };

    const body = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, body, {new: true});

    res.status(200).send({
        error: false,
        message: `User ${userId} is updated :)`,
        updatedUser
    })
         
}

const deleteUser = async (req, res) => {
    const { userId } = req.params;
    try{
        const deletedUser = await User.findByIdAndDelete(userId);
        res.status(200).send({
            error: false,
            massage: `User ${userId} is deleted`,
            deletedUser 
        });
    } catch (err) {
        res.status(500).send(`Internal server error: ${error}`);
    }
};


module.exports = {
    registerUser,
    login,
    getUsers, 
    showOneUser,
    updateUser,
    deleteUser,
}