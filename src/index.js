const  fs = require('fs/promises')

const myFileWriter = async(fileName,fileContent)=>{
	fs.writeFile(fileName,fileContent);
	console.log("written")
}
const myFileDeleter = async(fileName)=>{
	fs.unlink(fileName);
	console.log("delete success")
}
const myFileUpdater= async(fileName,fileContent)=>{
	fs.appendFile(fileName,fileContent)
	console.log("Update")
}
myFileWriter("index.html","<h1>Hellow</h1>")
myFileUpdater("index.html","<h1>Hellow How are you</h1>")
myFileDeleter("index.html")
module.exports={myFileWriter,myFileUpdater,myFileDeleter}