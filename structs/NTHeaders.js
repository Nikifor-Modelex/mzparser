const Struct=require('../bsto/struct')

const{
    DWORD,
    WORD
} = require('../bsto/types')

const ImageFileHeader =require('./ImageFileHeader')
const NTHeaders=Struct.Create({
    Signature:DWORD,
    FileHeader:ImageFileHeader,
    arch:WORD
})

module.exports=NTHeaders