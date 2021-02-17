const express = require('express')
const router = express.Router();


router.get('https://cavellerson.herokuapp.com/about', (req, res) => {
    res.render('about.ejs')
})

router.get('https://cavellerson.herokuapp.com/resume', (req, res) => {
    res.render('resume.ejs')
})

router.get('https://cavellerson.herokuapp.com/projects', (req, res) => {
    res.render('projects.ejs')
})



module.exports = router;
