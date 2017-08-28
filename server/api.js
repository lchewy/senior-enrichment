'use strict'
const api = require('express').Router()
// const db = require('../db')
const db = require('../db/models/index')
const Students = db.Students;
const Campus = db.Campuses

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
// api.get('/hello', (req, res) => res.send({hello: 'world'}))

// console.log(Students)
api.get('/campus', (req,res,next) => {
	// Campus.findAll()
	//  .then(camps=>{
	// 	if(camps.length === 0) res.sendStatus(404);
	// 	else res.json(camps);
	//  })

	Promise.all([
		Campus.create({
			name: "Luna",
			url: "http://4.bp.blogspot.com/-8Bl5X0bXY_I/TlsGUp4f63I/AAAAAAAACI4/JSC9aei00ns/s1600/moon.jpg"
		}),
		Campus.create({
			name: "Terra",
			url: "http://serc.carleton.edu/images/earthlabs/globe_from_terra.jpg"
		}),
		Campus.create({
			name: "Mars",
			url: "http://space-facts.com/wp-content/uploads/mars.jpg"
		}),
		Campus.create({
			name: "Titan",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/PIA20016-SaturnMoon-Titan-20151113.jpg/220px-PIA20016-SaturnMoon-Titan-20151113.jpg"
		})

	]).then( instance => {
		res.json(instance)
	})
	.catch(console.error)

})

api.get('/campus/:id', (req, res, next) =>{
	// Campus.findById({where:{id: req.params.id}})
	Campus.findOne({where: {id: req.params.id}})
	 .then(camp => {
		if(!camp) res.sendStatus(404);
		else res.json(camp);
	 })
	 
})

api.get('/students', (req,res,next) => {
	Students.findAll({include: [{ all: true, nested: true }]})
	 .then(allStudents => {
		 if(allStudents.length === 0) res.sendStatus(404);
		 else res.json(allStudents);
	 })
})

api.get('/students/:id', (req,res,next) => {
	Students.findOne({where:{id:req.params.id}})
	 .then(student =>{
		 if(!student) res.sendStatus(404)
		 else res.json(student)
	 })
})

api.post('/campus', (req, res, next) =>{
	Campus.create(req.body)
	 .then(newCamp => {
		 res.json(newCamp);
	 })
	 .catch(() => res.sendStatus(500))
})

api.post('/students', (req, res, next) => {
	Students.create(req.body)
	 .then(newStudent => {
		//  console.log(req.body)
		newStudent.setCampus(req.body.campus);
		res.json(newStudent);
	 })
	 .catch(() => res.sendStatus(500));

	// Campus.findAll({where: {name: req.body.school}})
	//  .then(school => {
	// 	 if(school.length === 0) res.status(404).send('wrong school name')
	// 	 else return Students.create(req.body)
	//  }).then(student => {
	// 	res.json(student)
	//  })
	//  .catch(() => res.sendStatus(500));
})

api.put('/campus/:id', (req, res, next) => {
	Campus.findById({where:{id:req.params.id}})
	 .then(res => {
		 res.update({name: req.body.name})
	 })
	 .then(instance => {
		 res.json(instance);
	 })
	 .catch(() => res.sendStatus(500));
})

api.put('/students/:id', (req, res, next) => {
	Students.findById({where: {id: req.params.id}})
	 .then(res => {

	 })
})

api.delete('/campus/:id', (req, res, next) => {
	Campus.destroy({where:{id:req.params.id}})
})

api.delete('/students/:id', (req, res, next) => {
	Students.destroy({where:{id:req.params.id}})
})


module.exports = api