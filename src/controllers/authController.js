const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function gerarToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 1800,
});
}

module.exports = {

async signUp(req, res) {    
    const { email } = req.body;
    try {
        if(await User.findOne({ email }))
        return res.status(400).send({ mensagem: 'E-mail já existente' });
        
        const user = await User.create(req.body);
        user.ultimo_login = Date.now();
        user.senha = undefined;
        user.__v = undefined;
        
        return res.status(201).send({
            user,
            token: gerarToken({ id: user._id })
        });
    } catch(err) {
        return res.status(400).send({ mensagem: 'Registration failed'});
    }
},

 async signIn(req, res){
    const { email, senha } = req.body;

    const user = await User.findOne({ email }).select('+senha');

    if(!user)
        return res.status(401).send({ mensagem: 'Usuário e/ou senha inválidos' })

    if(!await bcrypt.compare(senha, user.senha))
        return res.status(401).send({ mensagem: 'Usuário e/ou senha inválidos' });

    user.senha = undefined;
    user.__v = undefined;
    user.ultimo_login = Date.now();
        res.send({
            user,
            token: gerarToken({ id: user._id })
        });
},

};