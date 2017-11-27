/**
 * Created by admin on 2017/11/23.
 */
var student = require('./student.js')
var teacher = require('./teacher.js')

teacher.add('Scott')
function add(teachername, students){
  teacher.add(teachername)

  students.forEach(function(item, index){
    student.add(item)
  })
}


exports.add = add

//module.exports = add