const express = require('express');
const app = express();

const PORT = 3000;



app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


const controller = require('./controllers/router.js')

app.use('/', controller);


app.get('/', (req, res) => {
    res.render('./home.ejs')
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port: ", PORT);
})
