
class BufferWithPos extends Buffer{
    pos               // current pointer to a location in a buffer
    constructor(buf,pos=0){
        super(buf)
        this.pos=pos
    }
    
}

module.exports=BufferWithPos