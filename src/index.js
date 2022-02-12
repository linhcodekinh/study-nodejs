//node mon auto restart when file changes in the directory are detected 
//node-sass
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path');

const app = express()
const port = 3000

const route = require('./routes')

//http://localhost:3000/img/logo.png
app.use(express.static(path.join(__dirname, 'public')))

//morgan http logger
app.use(morgan('combined'))

//hbs template engine
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "main" }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

//Route init
route(app);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

//npm start
//npm run watch