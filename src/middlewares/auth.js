const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader)
    return res.status(401).send({ error: 'Não autorizado'}); //se não tiver token

    const partes = authHeader.split(' ');

    if(!partes.length === 2)
        return res.status(401).send({ error: 'Não autorizado'}); //se o token não for dividido em duas parter (Bearer Token)

    const [ bearer, token ] = partes;
    
    if(!/^Bearer$/i.test(bearer))
        return res.status(401).send({ error: 'Não autorizado'}); //se não estiver escrito Bearer

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if(err)
            return res.status(401).send({ error: 'Não autorizado'}); //se o token for diferente     

    jwt.verify(token, authHeader, (err, result) => { 
        if(result)
        return res.status(401).send({ error: 'Sessão Inválida'});
    });

        req.userId = decoded.id;

        return next();            
    })
}