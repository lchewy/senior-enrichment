'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
	// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is requeired everywhere

// const User = require('./user');
const Students = require('./students');
const Campuses = require('./campuses');

//student belongs to campuses as campus
//campus has many students
Students.belongsTo(Campuses, {as: 'campus'});
// Students.belongsToMany(Campuses, {through: "site"})
Campuses.hasMany(Students)


module.exports = {
	// User,
	Students,
	Campuses
}
