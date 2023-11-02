const path = require('path')
const {writeFile, appendFile} = require('fs')
const os = require('os')

console.log(path.dirname(__filename))
console.log(path.extname(__filename))
console.log(path.basename(__filename))
console.log(path.parse(__filename).base)


// writeFile(
appendFile(
    'myfile01.txt',
    'Hi,I love Node.js......' + os.EOL,
    function(err){
        if(err) throw err
        console.log('สร้างและบันทึกเรียบร้องแล้ว');
    }
)

