const {
    readFileSync
}=require('fs')

const { readStruct } = require("./bsto/struct");
const DOSHeader = require("./types/DOSHeader");
var dosheader=readStruct(DOSHeader,readFileSync("./testing/sample.exe"),0)
debugger