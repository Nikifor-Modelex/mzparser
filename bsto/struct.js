class Struct{
    
    static Create(fields){
        var length=0
        for (var field in fields)
            length+=fields[field].length
        
        class CustomStructure extends Struct{
            constructor(arg1,offset=0){
                super()
                if(arg1 instanceof Buffer)
                    this.read(arg1,offset)
            }
            static length=length
            static fields=fields
            value={}
            length(){
                return this.__proto__.constructor.length
            }
            read(buffer,offset){
                var fields=this.__proto__.constructor.fields
                this.value={}
                for(var field in fields){
                    if(fields[field] instanceof Array){
                        this.value[field]=[]
                        for(var i=0;i<fields[field][0];i++){
                            var type= new fields[field][1]
                            type.read(buffer,offset)
                            offset+=type.length()
                            this.value[field].push(type.value)
                        }
                    }
                    else {
                        

                        var type= new fields[field]
                        type.read(buffer,offset)
                        offset+=type.length()
                        this.value[field]=type.value
                    }
                }

            }
            write(buffer,offset){}
        }

        return CustomStructure
    }
}
module.exports = Struct
