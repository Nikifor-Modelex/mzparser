const BufferWithPos = require("./bsto/bufferwpos.js")


const DOSHeader = require("./structs/DOSHeader");
const NTHeader = require("./structs/NTHeaders");
const { OptionalHeader64, OptionalHeader32 } = require("./structs/OptionalHeaders")



class MZFile {
    constructor(buf) {
        this.buffer= new BufferWithPos(buf)

        this.dosheader = new DOSHeader(this.buffer)
        this.buffer.pos = this.dosheader.value.e_lfanew

        this.ntheader = new NTHeader(this.buffer)

        var archHeaderStruct
        switch (this.ntheader.value.arch) {
            case 0x0b01:
                archHeaderStruct = OptionalHeader32
                this.arch='x32'
                break
            case 0x0b02:
                archHeaderStruct = OptionalHeader64
                this.arch='x64'
                break

            default:
                throw new Error('Unknown architecture')
        }


        this.optionalheader = new archHeaderStruct(this.buffer)

        
    }
}

module.exports=MZFile