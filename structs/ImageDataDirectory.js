const Struct=require('../bsto/struct')

const{
    DWORD
} = require('../bsto/types')
const VAS=Struct.Create({
    VirtualAddress:DWORD.LE,
    Size:DWORD.LE
})

const ImageDataDirectory = Struct.Create({
    Export: VAS,
    Import: VAS,
    Resource: VAS,
    Exception: VAS,
    Security: VAS,
    Relocation: VAS,
    Debug: VAS,
    Architecture: VAS,
    Reserved: VAS,
    TLS: VAS,
    Configuration: VAS,
    Bound: VAS,
    ImportAddressTable: VAS,
    DelayImport: VAS,
    NETMetaData: VAS

})

module.exports=ImageDataDirectory