import mongoose from "mongoose";

let autorSchema = new mongoose.Schema(
    {
        id:{type:String},
        nome:{type:String, required:true},
        nacionalidade:{type:String, required:true}
        // idLivro:{type:String, references:}
    },
    {
        versionKey:false
    }
)


const autores = mongoose.model('autores', autorSchema)

export default autores
