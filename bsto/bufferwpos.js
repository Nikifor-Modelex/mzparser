
class BufferWithPos extends Buffer{
    pos=0
    constructor(buf,pos=0){
        super(buf)
        this.pos=pos
        this.other=()=>{
            return this.subarray(this.pos)
        }
    }
    
}

module.exports=BufferWithPos