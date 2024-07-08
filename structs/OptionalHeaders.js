const Struct = require('../bsto/struct')

const {
    BYTE,
    WORD,
    DWORD,
    QWORD
} = require('../bsto/types')


// https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-image_optional_header64
const OptionalHeader64 = Struct.Create({
    MajorLinkerVersion: BYTE,
    MinorLinkerVersion: BYTE,
    SizeOfCode: DWORD.LE,
    SizeOfInitializedData: DWORD.LE,
    SizeOfUninitializedData: DWORD.LE,
    AddressOfEntryPoint: DWORD.LE,
    BaseOfCode: DWORD.LE,
    ImageBase: QWORD.LE,
    SectionAlignment: DWORD.LE,
    FileAlignment: DWORD.LE,
    MajorOperatingSystemVersion: WORD.LE,
    MinorOperatingSystemVersion: WORD.LE,
    MajorImageVersion: WORD.LE,
    MinorImageVersion: WORD.LE,
    MajorSubsystemVersion: WORD.LE,
    MinorSubsystemVersion: WORD.LE,
    Win32VersionValue: DWORD.LE,
    SizeOfImage: DWORD.LE,
    SizeOfHeaders: DWORD.LE,
    CheckSum: DWORD.LE,
    Subsystem: WORD.LE,
    DllCharacteristics: WORD.LE,
    SizeOfStackReserve: QWORD.LE,
    SizeOfStackCommit: QWORD.LE,
    SizeOfHeapReserve: QWORD.LE,
    SizeOfHeapCommit: QWORD.LE,
    LoaderFlags: DWORD.LE,
    NumberOfRvaAndSizes: DWORD.LE,
})

// https://learn.microsoft.com/en-us/windows/win32/api/winnt/ns-winnt-image_nt_headers32
const OptionalHeader32 = Struct.Create({
    MajorLinkerVersion: BYTE,
    MinorLinkerVersion: BYTE,
    SizeOfCode: DWORD.LE,
    SizeOfInitializedData: DWORD.LE,
    SizeOfUninitializedData: DWORD.LE,
    AddressOfEntryPoint: DWORD.LE,
    BaseOfCode: DWORD.LE,
    BaseOfData: DWORD.LE,
    ImageBase: DWORD.LE,
    SectionAlignment: DWORD.LE,
    FileAlignment: DWORD.LE,
    MajorOperatingSystemVersion: WORD.LE,
    MinorOperatingSystemVersion: WORD.LE,
    MajorImageVersion: WORD.LE,
    MinorImageVersion: WORD.LE,
    MajorSubsystemVersion: WORD.LE,
    MinorSubsystemVersion: WORD.LE,
    Win32VersionValue: DWORD.LE,
    SizeOfImage: DWORD.LE,
    SizeOfHeaders: DWORD.LE,
    CheckSum: DWORD.LE,
    Subsystem: WORD.LE,
    DllCharacteristics: WORD.LE,
    SizeOfStackReserve: DWORD.LE,
    SizeOfStackCommit: DWORD.LE,
    SizeOfHeapReserve: DWORD.LE,
    SizeOfHeapCommit: DWORD.LE,
    LoaderFlags: DWORD.LE,
    NumberOfRvaAndSizes: DWORD.LE,
})


module.exports = {
    OptionalHeader32,
    OptionalHeader64
}