const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

/*Creación del objeto para el usuario*/
const UserSchema = new Schema({

    user: {
        
        type: String,
        required: true

    },
    email: {
        
        type: String,
        required: true,
        unique: true
        
    },
    password: {
        
        type: String,
        required: true
        
    }
}, {

    timestamps: true

});

/*Encriptación de la contraseña*/
UserSchema.methods.encryptPassword = async password => {

    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);

};

UserSchema.methods.matchPassword = async function(password) {

    return await bcrypt.compare(password, this.password);

};

module.exports = model('Usuario', UserSchema, 'Usuarios');