var fs = require('fs');

function FileDocuments (file, content){
    fs.appendFileSync(file, content, () => {
    });
}
FileDocuments('file.js', ' New text ');