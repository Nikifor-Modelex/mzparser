const {
    readFileSync
} = require('fs')
const MZFile = require('./classes/MZFile.js')

// useful functions for debugging
global.uinttobuf = (b, n, le) => {
    var buf = Buffer.alloc(b)
    buf[`writeUInt${b * 8}${le ? "L" : "B"}E`](n, 0)
    return buf
}

global.hex=n=>n.toString(16)
global.pprint=o=>JSON.stringify(o,null,4)

const mzfile=new MZFile(readFileSync("./testing/sample.exe"))
debugger