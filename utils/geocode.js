const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiaWdvcjluIiwiYSI6ImNrMWM2ZTNqaTAwcHczaG9uYXRwMnd4MngifQ.vmlSV7yYaLDjWW91xq7R7A`

    request({url, json: true}, (err, resp) => {
        if (err) {
            callback({message: 'Unable to connect to location services.'})
        } else if (resp.body.features.length === 0) {
            callback({message: 'Location not found.'})
        } else {
            const latitude = resp.body.features[0].center[1]
            const longitude = resp.body.features[0].center[0]
            const location = resp.body.features[0].place_name

            callback(undefined, {latitude, longitude, location})
        }
    })
}

module.exports = {
    geocode
}
