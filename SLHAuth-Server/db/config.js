const  mongoose  = require("mongoose");

const dbConnection = async() => {

    try {

        mongoose.connect(process.env.MONGODB);

        console.log('BD Conectada OK')

    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la BD');
    }
}

module.exports = {
    dbConnection
}