const  mongoose  = require("mongoose");

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.MONGODB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('BD Conectada OK')

    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la BD');
    }
}

module.exports = {
    dbConnection
}