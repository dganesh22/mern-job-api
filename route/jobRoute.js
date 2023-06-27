const route = require('express').Router()
const jobController = require('../controller/jobController')
const recruiterAuth = require('../middleware/recruiterAuth')
const auth = require('../middleware/auth')


route.get(`/`, auth, jobController.getAll)  // read all

route.get(`/latestJobs`, auth, jobController.latestJobs)  // latest jobs

route.get(`/:id`, auth, jobController.getSingle) // read single

route.post(`/`, auth, recruiterAuth, jobController.create) // create

route.patch(`/:id`, auth, recruiterAuth, jobController.update) // update

route.delete(`/:id`, auth, recruiterAuth, jobController.delete) // delete

module.exports = route