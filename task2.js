var fs = require('fs');
function constFile(file, nodejs){
    fs.writeFile(file,nodejs,()=>{
        console.log('the file is made');
    });
}
constFile('new.txt', 'Hello Ukd'); This is new text