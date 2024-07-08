const Struct=require('../bsto/struct')

const{
    DWORD
} = require('../bsto/types')

// https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-image_data_directory
const VAS=Struct.Create({
    VirtualAddress:DWORD.LE,
    Size:DWORD.LE
})


// 🤫
const ForceImageDataDirectory = Struct.Create({
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

module.exports={
    ForceImageDataDirectory,
    VAS
}