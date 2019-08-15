var User = require('models/users');
var Faker = require('faker');

exports.Up = () =>   {

    for (let index = 0; index < 10000; index++) {

        UserModel = new User({
            nombre:  Faker.name.firstName(),
            apellido:Faker.name.lastName(),
            user:    Faker.internet.userName(),
            pass:    Faker.internet.password()
        });
        UserModel.save();
    }
}

exports.Down = () => {
    User.deleteMany({}).exec();
}
