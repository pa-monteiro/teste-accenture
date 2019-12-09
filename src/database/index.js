const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://accenture:j68ONPTUxMbxggaK@cluster0-i1sny.mongodb.net/accenture', {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

module.exports = mongoose;