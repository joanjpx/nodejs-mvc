const dotenv = require('dotenv');
      dotenv.config(); // Sets up dotenv as soon as our application starts
var AppRoot = require('app-root-path');
var User = require(AppRoot+'/models/users');
var Faker = require('faker');
var chalk = require('chalk');
var mongoose = require('mongoose');
mongoose.connect('mongodb://'+process.env.DB_HOST+process.env.DB_DATABASE,{ useNewUrlParser: true });

exports.Up = () => {

    for (let index = 0; index < 10000; index++) {

        UserModel = new User({
            nombre:  Faker.name.firstName(),
            apellido:Faker.name.lastName(),
            user:    Faker.internet.userName(),
            pass:    Faker.internet.password()
        });
        UserModel.save();
    }
    console.log(chalk.gray.bgGreen.bold('User.Model Seeding Successfully'));
    
    
}

exports.Down = () => {
    console.log(chalk.bgRed('User.Model Dropping all rows'));
    User.deleteMany({}).exec();
    
}

require('make-runnable/custom')({
    printOutputFrame: false
})