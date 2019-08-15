//Seeders to Include below
var AppRoot = require('app-root-path');
const UserMigration = require(AppRoot+'/models/migration/user.migration');

//Call to UP Method on every seed
exports.Seed = () => {
    
    console.log("######### DB SEED ##########");
    UserMigration.Up();

}