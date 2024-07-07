const {
    readFileSync
}=require('fs')

const DOSHeader = require("./structs/DOSHeader");
const NTHeader = require("./structs/NTHeaders");

const sample=readFileSync("./testing/sample.exe")
var dosheader=new DOSHeader(sample,0)
var NTHeaderOffset=dosheader.value.e_lfanew
var ntheader=new NTHeader(sample,NTHeaderOffset)
debugger