/**
 * Created by admin on 2017/11/27.
 */
/*var fs = require('fs')*/

/*var data = fs.readFileSync('input.txt')

console.log(data.toString());
console.log("程序执行结束!");

 console.log(data.toString());
 console.log("程序执行结束!");*/


/*
var data = fs.readFile('input.txt', function (err, data) {
  if(err){
    return console.error(err)
  }
  console.log(data.toString())
})
console.log("程序执行结束!")*/


/*
let events = require('events')

var eventEmitter = new events.eventEmitter()

eventEmitter.on('eventName', function(){

})

eventEmitter.emit('eventName')
*/


let events = require('events')
var eventEmitter = new events.EventEmitter()

eventEmitter.on('connection', function(){
  console.log('链接成功')
  eventEmitter.emit('data_received')
})

eventEmitter.on('data_received', function(){
  console.log('数据接收成功')
})
eventEmitter.emit('connection')
console.log("程序执行完毕。");