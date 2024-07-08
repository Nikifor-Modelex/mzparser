const {
    readFileSync
} = require('fs')
const MZFile = require('./mz.js')

global.uinttobuf = (b, n, le) => {
    var buf = Buffer.alloc(b)
    buf[`writeUInt${b * 8}${le ? "L" : "B"}E`](n, 0)
    return buf
}

// Uncaught TypeError TypeError: Do not know how to serialize a BigInt
BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
  };

const mzfile=new MZFile(readFileSync("./testing/client.exe"))
debugger