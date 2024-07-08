/**
 * Reads a \0 terminated string from a buffer
 * @param {Buffer} buf 
 */
function readNullTerminatedString(buf,start=0){
    var end=start
    while(buf[end]!=0 && buf.length>end)    // Increases end until a zero is found
        end++                                  // or the end of buffer is reached

    return buf.subarray(start,end).toString()  // grabs the bytes between start and end; converts them to a string
}

class ImageSection {
    name    // Section name (string)
    header  // section header; also contains section name but as bytes
    #buffer // mz file buffer reference
    body    // section body from the buffer

    constructor(buffer, header) {
        this.name = readNullTerminatedString(Buffer.from(header.Name)) 
        this.header=header
        this.#buffer = buffer
        this.body = this.#buffer.subarray(header.VirtualAddress, header.VirtualAddress + header.VirtualSize)
        // This code should be quite self-explanatory
    }
}

module.exports = ImageSection