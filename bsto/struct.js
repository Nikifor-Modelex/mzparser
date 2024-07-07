function readStruct(fields,buffer,offset=0) {
    struct={}
    for(var field in fields){
        if(fields[field] instanceof Array){
            struct[field]=[]
            for(var i=0;i<fields[field][0];i++){
                var type= new fields[field][1]
                type.read(buffer,offset)
                offset+=type.length()
                struct[field].push(type.value)
            }
        }
        else {

            var type= new fields[field]
            type.read(buffer,offset)
            offset+=type.length()
            struct[field]=type.value
        }
    }
    return struct
}
module.exports = {
    readStruct
}