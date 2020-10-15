const mongoose = require('mongoose');

const uri = 'mongodb+srv://harsh:harsh1234@webgroup26.f69hq.gcp.mongodb.net/movietime';
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected.');
});