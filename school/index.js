/**
 * Created by admin on 2017/11/23.
 */
var kalss = require('./kalss.js')

exports.add = function(kalsses){
  kalsses.forEach(function(item,index){
    var _kalss = item
    var teachername = item.teachername
    var students = item.students

    kalss.add(teachername, students)
  })
}
this.add('z老师',['stu1','stu2','stu3','stu4','stu5','stu6',])
