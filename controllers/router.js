const express = require('express')
const router = express.Router();


router.get('/about', (req, res) => {
    res.render('about.ejs')
})

router.get('/resume', (req, res) => {
    res.render('resume.ejs')
})

router.get('/projects', (req, res) => {
    res.render('projects.ejs')
})



module.exports = router;
