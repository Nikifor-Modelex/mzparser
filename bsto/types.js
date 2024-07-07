class typeBaseClass{
    static length
    
    value
    length(){
        if(this.__proto__.constructor.length!==false)
        return this.__proto__.constructor.length
    }
    read(buffer,offset){}
    write(buffer,offset){}
    
}




class BYTE extends typeBaseClass{
    constructor(){super()}
    static length=1
    read(buffer,offset){
        this.value=buffer[offset]
    }
}

class WORD extends typeBaseClass{
    constructor(){super()}
    static length=2
    read(buffer,offset){
        this.value=buffer.readUInt16LE(offset)
    }
}

class DWORD extends typeBaseClass{
    constructor(){super()}
    static length=4
    read(buffer,offset){
        this.value=buffer.readUInt32LE(offset)
    }

}

module.exports = {
    typeBaseClass,
    BYTE,
    WORD,
    DWORD,

}