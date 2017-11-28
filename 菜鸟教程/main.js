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


/*let events = require('events')
var eventEmitter = new events.EventEmitter()

eventEmitter.on('connection', function(){
  console.log('链接成功')
  eventEmitter.emit('data_received')
})

eventEmitter.on('data_received', function(){
  console.log('数据接收成功')
})
eventEmitter.emit('connection')
console.log("程序执行完毕。");*/

/*let buf = new Buffer(256)
let len = buf.write("www.runoob.com");
console.log("写入字节数 : "+  len)*/

/*
 let buf = new Buffer(26)
 for(let i = 0; i <26; i++){
 buf[i] = i + 97
 }
 console.log(buf.toString('ascii'))
 console.log(buf.toString('ascii', 0, 5))
 console.log(buf.toString(undefined, 0, 5))*/

/*
var buf = new Buffer('www.runoob.com');
var json = buf.toJSON(buf)

console.log(json)*/

/*var buffer1 = new Buffer('菜鸟教程')
 var buffer2 = new Buffer('www.runoob.com')
 var buffer3 = Buffer.concat([buffer1, buffer2])

 console.log("buffer3 内容: " + buffer3.toString())

 console.log(buffer1.compare(buffer2))*/

/*var buffer1 = new Buffer('ABC')

var buffer2 = new Buffer(3)

buffer1.copy(buffer2)

console.log("buffer2 content: " + buffer2.toString());*/

/*
 var buffer1 = new Buffer('runoob')
 // 剪切缓冲区
 var buffer2 = buffer1.slice(0,2)
 console.log("buffer2 content: " + buffer2.toString())
 console.log("buffer2 lenght: " + buffer2.length)
 */

/*
var fs = require('fs')
var data = ''
var readerStream = fs.createReadStream('input.txt')
readerStream.setEncoding('utf-8')
readerStream.on('data', function(chunk){
  data += chunk
})
readerStream.on('end',function(){
  console.log(data);
});
readerStream.on('error', function(err){
  console.log(err.stack);
});
console.log("程序执行完毕");*/

/*
var fs = require("fs")
var data = '写入流----\n我的地方都会\ni返回给i哦的平衡覅合法ip不会'
var writeStream = fs.createWriteStream('output.txt')
writeStream.write(data, 'utf-8')
writeStream.end()

writeStream.on('finish', function(){
  console.log("写入完成。");
})
writeStream.on('error', function(err){
  console.log(err.stack);
})
console.log("程序执行完毕");*/


//1.管道流
/*
var fs = require("fs")

var readerStream = fs.createReadStream('input.txt')
var writerStream  = fs.createWriteStream('output.txt')

readerStream.pipe(writerStream)

console.log("程序执行完毕")*/

//2.链式流

/*
var fs = require("fs")
var zlib = require("zlib")

fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'))
*/

/*
var fs = require("fs")
var zlib = require("zlib")

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'))*/

/*
function say(word){
  console.log(word);
}
function execute(someFunction, value) {
  someFunction(value);
}
execute(say, "Hello");*/

var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);