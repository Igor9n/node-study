const request = require('request')

const forecast = ({latitude, longitude}, callback) => {
    const url = `https://api.darksky.net/forecast/3f0e5b06edc56cd6a2a7c2363b467763/${latitude},${longitude}`;

    request({url, json: true}, (err, resp) => {
        if (err) {
            callback({message: 'Connection problems'})
        } else if (resp.body.error) {
            callback({message: resp.body.error})
        } else {
            callback(undefined,{summary: resp.body.daily.data[0].summary})
        }
    })
}

module.exports = {
    forecast
}
