var fs = require ('fs');
function ErrorFile(file){
    try {
        if (fs.unlinkSync(file)){
            fs.existsSync(file);
            console.log('file"${file}" was deleted');
        }else{
            console.log('file"${file}"does not exist');
        }
    } catch(error){
        console.error(error);
    }
}
ErrorFile('file.js');