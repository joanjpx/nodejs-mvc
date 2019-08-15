var AppRoot = require('app-root-path');
var User = require(AppRoot+'/models/users');
var Faker = require('faker');

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
    console.log('User.Model Seeding Successfully');
}

exports.Down = () => {
    console.log('User.Model Dropping all rows');
    User.deleteMany({}).exec();
}