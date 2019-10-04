const {geocode} = require('./utils/geocode')
const {forecast} = require('./utils/weather')
const {command, parse} = require('yargs')

command({
    command: 'forecast',
    describe: 'Forecast for location',
    builder: {
        location: {
            describe: 'Your location',
            demandOption: true,
            type: 'string',
        },
    },
    handler: ({location}) => {
        forecastWeather(location)
    }
})


const forecastWeather = (location) => geocode(location, (err, data) => {
    if (err) {
        console.log(`Error: ${err}`)
    } else {
        forecast(data, (err, forecastData) => {
            console.log(data.location)
            console.log(forecastData)
        })
    }
})

parse()
