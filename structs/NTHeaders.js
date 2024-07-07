const Struct=require('../bsto/struct')

const{
    DWORD
} = require('../bsto/types')

const ImageFileHeader =require('./ImageFileHeader')
const NTHeaders=Struct.Create({
    Signature:DWORD,
    FileHeader:ImageFileHeader
    // TO ADD OptionalHeaders Field
})

module.exports=NTHeaders