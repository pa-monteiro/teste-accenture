const User = require('../models/User');

module.exports = {
    async show(req, res){
        const { id } = req.userId;
        const user = await User.findOne({ id });
        
        res.send({ user });
    }    
}