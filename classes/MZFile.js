// Coder's life quality improvement
const BufferWithPos = require("../bsto/bufferwpos.js");

// Binary structures that will be used to deserialize the file
const DOSHeader = require("../structs/DOSHeader.js");
const {ForceImageDataDirectory,VAS} = require("../structs/ImageDataDirectory.js");
const NTHeader = require("../structs/NTHeaders.js");
const { OptionalHeader64, OptionalHeader32 } = require("../structs/OptionalHeaders.js");
const SectionHeader = require("../structs/SectionHeader.js");
const ImageSection = require("./ImageSection.js");



class MZFile {
    arch            // x32 or x64
    buffer          // raw data of the file
    dosheader       // deserealized DOS Header
    ntheader        // deserealized NT Header

    /**
     * 
     * @param {Buffer} buf 
     */
    constructor(buf) {
        this.buffer = new BufferWithPos(buf)                           // Causes the buffer to keep track of current position in the file

        this.dosheader = new DOSHeader(this.buffer).value              // Deserializes the DOS Header
        if(this.dosheader.mz != 0x4D5A)
            throw new Error("MZ signature missing")                    // Signature verification (4D 5A - MZ in ascii)
        this.buffer.pos = this.dosheader.e_lfanew                      // Skips the DOS Stub and jumps to the NTHeader

        this.ntheader = new NTHeader(this.buffer).value                // Deserializes the NT Header
        if(this.ntheader.Signature != 0x50450000)
            throw new Error("PE signature missing")                    // Signature verification (50 45 00 00 - PE\0\0 in ascii)
        
        var archHeaderStruct                                           // An OptionalHeader structure based on architecture
        switch (this.ntheader.arch) {
            case 0x0b01: // PE
                archHeaderStruct = OptionalHeader32
                this.arch = 'x32'
                break
            case 0x0b02: // PE+
                archHeaderStruct = OptionalHeader64
                this.arch = 'x64'
                break

            default:
                throw new Error('Unknown architecture')
        }


        this.optionalheader = new archHeaderStruct(this.buffer).value  // Architecture-Specific Optional header is deserialized
        var customEntries = this.optionalheader.NumberOfRvaAndSizes - ForceImageDataDirectory.length / VAS.length 
                                                                       // Number of custom entries in Image Data Directory
                                                                       // VAS - Virtual Adress and Size

        this.datadirectory = {
            mandatory: new ForceImageDataDirectory(this.buffer).value, // All the required entries
            custom: VAS.readArray(this.buffer, customEntries)          // Deserealized custom entries is stored in the 'value' field
            .map(entry => entry.value)                                 // This line removes the need to access fields through .value
        }
           
                                                                       // Now buffer position points to the first of the section headers
                                                                       
        this.sections = {}                                             // This dictionary associates section names with their headers and bodies
        var sizeSum = 0                                                // Stores the cumulative size of sections' bodies
                                                                       
                                                                       // all section headers are joined together and can be read as an array
        SectionHeader.readArray(this.buffer, this.ntheader.FileHeader.NumberOfSections)
        .forEach(({value:header})=>{                                   // As previously mentioned the deserialized data is stored in 'value'
            const section = new ImageSection(this.buffer,header)       // Creates an instance of ImageSection for the given header
            sizeSum += section.header.VirtualSize
            this.sections[section.name] = section                      // Inserts the section into the dictionary
        })
        this.buffer.pos += sizeSum                                     // Buffer position is now at the end of all the expected data in the file
        this.other = this.buffer.subarray(this.pos)                    // Any unexpected bytes are stored in 'other'
                                                                       // Some executables (eg compiled NodeJS via pkg) 
                                                                       // may have data written outside of any section body
                                                                       // but is only retrieved through code during runtime
                                                                       // Such extra data will be stored in this.other
        // Thats it! The MZ file was deserialized

    }
}

module.exports = MZFile