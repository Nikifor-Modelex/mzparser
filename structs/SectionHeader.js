const Struct=require('../bsto/struct')

const{
    DWORD,
    WORD,
    BYTE
} = require('../bsto/types')

const SectionHeader=Struct.Create({
    Name: [8,BYTE],
    VirtualSize: DWORD.LE,
    VirtualAddress: DWORD.LE,
    SizeOfRawData: DWORD.LE,
    PointerToRawData: DWORD.LE,
    PointerToRelocations: DWORD.LE,
    PointerToLinenumbers: DWORD.LE,
    NumberOfRelocations: WORD.LE,
    NumberOfLinenumbers: WORD.LE,
    Characteristics: DWORD.LE
})

module.exports=SectionHeader