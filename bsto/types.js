class typeBaseClass {
    static length
    constructor(arg1) {
        if (arg1 instanceof Buffer) // if a buffer is provided into constructor, it reads immediately
            this.read(arg1)
    }
    value // deserialized value of the structure
    length() {
        if (this.__proto__.constructor.length !== false) // if structure has static length
            return this.__proto__.constructor.length      // it returns that static length
    }
    read(buffer) {
        buffer.pos += this.length() // quite obvious
    }
    write(buffer) { } // to be implemented

}



class BYTE extends typeBaseClass {
    constructor() { super() }
    static length = 1
    read(buffer) {
        this.value = buffer[buffer.pos]
        buffer.pos++
    }
}
class intBaseClass extends typeBaseClass {
    constructor() { super() }
    readfunc
    read(buffer) {
        this.value = buffer[this.readfunc](buffer.pos) // reads a specific type of a number based on the readfunc property
                                                       // it is a foreign key to a method in Buffer class
        buffer.pos += this.length()
    }
}

// WORDs of different sizes

class WORD extends intBaseClass {
    readfunc = 'readUInt16BE'
    static length = 2
    static LE = class WORDLE extends WORD {
        static length = 2
        readfunc = 'readUInt16LE'
    }
}

class DWORD extends intBaseClass {
    readfunc = 'readUInt32BE'
    static length = 4
    static LE = class DWORDLE extends DWORD {
        static length = 4
        readfunc = 'readUInt32LE'
    }
}


class QWORD extends intBaseClass {
    readfunc = 'readBigUInt64BE'
    static length = 8
    static LE = class DWORDLE extends DWORD {
        static length = 8
        readfunc = 'readBigUInt64LE'
    }
}


module.exports = {
    typeBaseClass,
    BYTE,
    WORD,
    DWORD,
    QWORD

}