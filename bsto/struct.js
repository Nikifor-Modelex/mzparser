
class Struct{
    /**
     * 
     * @param {*} fields 
     * @returns Class
     */
    static Create(fields){
        var length=0
        for (var field in fields)
            length+=fields[field].length
        
        class CustomStructure extends Struct{
            constructor(arg1){
                super()
                if(arg1 instanceof Buffer)
                    this.read(arg1)
            }
            static length=length
            static fields=fields
            value={}
            length(){
                return this.__proto__.constructor.length
            }
            read(buffer){
                var fields=this.__proto__.constructor.fields
                this.value={}
                for(var field in fields){
                    if(fields[field] instanceof Array){
                        this.value[field]=[]
                        for(var i=0;i<fields[field][0];i++){
                            var type= new fields[field][1]
                            type.read(buffer)
                            this.value[field].push(type.value)
                        }
                    }
                    else {
                        
                        var type= new fields[field]
                        type.read(buffer)
                        this.value[field]=type.value
                    }
                }

            }
            write(buffer){}
        }

        return CustomStructure
    }
}
module.exports = Struct
