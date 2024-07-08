const Struct=require('../bsto/struct')

const{
    DWORD,
    WORD
} = require('../bsto/types')

const ImageFileHeader =require('./ImageFileHeader')

//https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-image_nt_headers64
const NTHeaders=Struct.Create({
    Signature:DWORD,
    FileHeader:ImageFileHeader,
    arch:WORD
})

module.exports=NTHeaders