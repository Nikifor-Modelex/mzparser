const Struct=require('../bsto/struct')

const{
    WORD,
    DWORD
} = require('../bsto/types')

const ImageFileHeader=Struct.Create({
    Machine:WORD,
    NumberOfSections:WORD,
    TimeDateStamp:DWORD,
    PointerToSymbolTable:DWORD,
    NumberOfSymbols:DWORD,
    SizeOfOptionalHeader:WORD,
    Characteristics:WORD
})


module.exports=ImageFileHeader