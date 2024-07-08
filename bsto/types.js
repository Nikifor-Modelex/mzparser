class typeBaseClass{
    static length
    constructor(arg1){
        if(arg1 instanceof Buffer)
            this.read(arg1)
    }
    value
    length(){
        if(this.__proto__.constructor.length!==false)
        return this.__proto__.constructor.length
    }
    read(buffer){
        buffer.pos+=this.length()
    }
    write(buffer){}
    
}



class BYTE extends typeBaseClass{
    constructor(){super()}
    static length=1
    read(buffer){
        this.value=buffer[buffer.pos]
        buffer.pos++
    }
}
class intBaseClass extends typeBaseClass{
    constructor(){super()}
    readfunc
    read(buffer){
        this.value=buffer[this.readfunc](buffer.pos)
        buffer.pos+=this.length()
    }
}

class WORD extends intBaseClass{
    readfunc='readUInt16BE'
    static length=2
    static LE=class WORDLE extends WORD{
        static length=2
        readfunc='readUInt16LE'
    }
}

class DWORD extends intBaseClass{
    readfunc='readUInt32BE'
    static length=4
    static LE=class DWORDLE extends DWORD{
        static length=4
        readfunc='readUInt32LE'
    }
}


class QWORD extends intBaseClass{
    readfunc='readBigUInt64BE'
    static length=8
    static LE=class DWORDLE extends DWORD{
        static length=8
        readfunc='readBigUInt64LE'
    }
}


module.exports = {
    typeBaseClass,
    BYTE,
    WORD,
    DWORD,
    QWORD

}