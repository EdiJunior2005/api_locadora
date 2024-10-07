import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADDRESS}/${process.env.DB_NAME}`
          //`mongodb+srv://edicfjunior05:<edijunior05>@cluster0.54lgn.mongodb.net/LOCADORA`
            );
          console.log(`conectado ao mongol`)
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);
    }
};
connectDB();

export default mongoose;