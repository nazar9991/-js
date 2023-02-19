var fs = require('fs');
function readFileConst(FileConst){
fs.readFile(FileConst,'utf8', (err,data)=>{
  if(err)  {
    console.throwerror(err);
  }else{
  }  {
  console.log(data);
  }
});

}
readFileConst('file.js'); This is new text