import mongoose from "mongoose"

const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.URI}`)
        console.log('Conectado ao MongoDB')
    }catch(error){
        console.log('Erro ao conectar ao MongoDB')
    }
}

export default connectDB