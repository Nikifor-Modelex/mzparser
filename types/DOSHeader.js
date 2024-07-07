const Struct=require('../bsto/struct')

const{
    WORD,
    DWORD
} = require('../bsto/types')



module.exports=Struct.Create({
    e_magic:WORD,
    e_cblp:WORD,
    e_cp:WORD,
    e_crlc:WORD,
    e_cparhdr:WORD,
    e_minalloc:WORD,
    e_maxalloc:WORD,
    e_ss:WORD,
    e_sp:WORD,
    e_csum:WORD,
    e_ip:WORD,
    e_cs:WORD,
    e_lfarlc:WORD,
    e_ovno:WORD,
    e_res:[4,WORD],
    e_oemid:WORD,
    e_oeminfo:WORD,
    e_res2:[10,WORD],
    e_lfanew:DWORD

})