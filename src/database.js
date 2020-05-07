const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/order-list',{
    useNewUrlParser:true
})
    .then(db =>console.log('Db is connected0'))
    .catch(err => console.log(err));
