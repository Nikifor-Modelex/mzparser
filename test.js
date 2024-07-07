const {
    readFileSync
}=require('fs')

const DOSHeader = require("./types/DOSHeader");
var dosheader=new DOSHeader(readFileSync("./testing/sample.exe"),0)
debugger