const Struct=require('../bsto/struct')

const{
    WORD,
    DWORD
} = require('../bsto/types')

// https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-image_file_header
const ImageFileHeader=Struct.Create({
    Machine:WORD.LE,
    NumberOfSections:WORD.LE,
    TimeDateStamp:DWORD.LE,
    PointerToSymbolTable:DWORD.LE,
    NumberOfSymbols:DWORD.LE,
    SizeOfOptionalHeader:WORD.LE,
    Characteristics:WORD.LE
})


module.exports=ImageFileHeader