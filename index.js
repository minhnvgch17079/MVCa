const express = require('express')
const app = express()

app.listen(process.env.PORT || 3000, () => {
    console.log('App runing')
})

app.set('views', 'views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

let create_controller = require('./controllers/manage')
let index_controller = require('./controllers/index')

app.get('/', index_controller)

app.get('/create', create_controller.create)
app.post('/create', create_controller.create_process)

app.get('/delete/:id', create_controller.delete_process)
