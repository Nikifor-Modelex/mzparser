const BufferWithPos = require("./bsto/bufferwpos.js")


const DOSHeader = require("./structs/DOSHeader");
const ImageDataDirectory = require("./structs/ImageDataDirectory.js");
const NTHeader = require("./structs/NTHeaders");
const { OptionalHeader64, OptionalHeader32 } = require("./structs/OptionalHeaders");
const SectionHeader = require("./structs/SectionHeader.js");

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
        this.datadirectory=new ImageDataDirectory(this.buffer)
        this.sections=[]

        // 8 - size of VAS structure (Virtual Address and Size)
        // 15 - number of mandatory image data directory entries
        this.buffer.pos+= ( this.optionalheader.value.NumberOfRvaAndSizes - 15) * 8
        // now buffer position points to the first of the section headers
        // all section headers are joined together
        // every section header starts with a '.' (0x2E)
        while(this.buffer[this.buffer.pos]==0x2E) 
            this.sections.push(new SectionHeader(this.buffer))
        
        var other=this.buffer.other()
        
    }
}

module.exports=MZFile