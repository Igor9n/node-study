const express = require('express');
const path = require('path')
const hbs = require('hbs')

const app = express();

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsDirectoryPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs');
app.set('views', viewsDirectoryPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Ihor',
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Raining',
        location: 'Kharkov'
    })
})

app.get('*',(req,res) => {
    res.send('Not found')
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
