var fs = require('fs')
function NewFile (text,programm){
    try {
        fs.renameSync(text,programm);
        console.log('the file has been moved');
    }
    catch (error){
        console.log('error');
    }
    }
NewFile('first_folder/file.js','second_folder/file.js');