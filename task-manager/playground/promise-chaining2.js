require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5da366e92f457a19889a9192').then(() => {
    return Task.find({completed: false})
}).then((tasks) => {
    console.log(tasks)
}).catch((e)=>{
    console.log(e)
})
// Task.findByIdAndUpdate('5da3516bc3e71a216c234b71', {age: 1}).then((user) => {
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })