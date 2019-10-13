require('../src/db/mongoose')
const User = require('../src/models/user')

// 5da35162c3e71a216c234b70

User.findByIdAndUpdate('5da3516bc3e71a216c234b71', {age: 1}).then((user) => {
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})