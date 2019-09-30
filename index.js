const express = require('express')
const app = express()

app.listen(process.env.PORT || 3000, () => {
    console.log('App running')
})

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let enrollment_index = require('./controllers/enrollment/controller_index')
let enrollment_list_student = require('./controllers/enrollment/controller_list_student')
let enrollment_list_enrollment = require('./controllers/enrollment/controller_list_enrollment')

app.get('/enrollment', enrollment_index)
app.get('/enrollment/list_of_student', enrollment_list_student)
app.get('/enrollment/list_enrollment', enrollment_list_enrollment)