const AsaderoSchema = require("../schemas/asadero.schema");
const errorMsg = "Oops something went wrong";

const createAsadero = async (req, res) => {
  try {
    console.log(req.body);
    const asadero = await AsaderoSchema.create(req.body);
    console.log(asadero);
    if (asadero) return res.status(200).json(asadero);
    return res.status(400).send(errorMsg);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getAllMyAsaderos = async (req, res) => {
  try {
    //user already logged info @ res.locals thanks to middleware
    const user = res.locals.user._id;
    const asaderos = await AsaderoSchema.find();
  } catch (error) {}
};

/*
createAsadero --> Crear
getAllMyAsaderos  --> Todos los asaderos a los que voy
getOneMyAsadero --> Un asadero concreto
getUsersFromAsadero --> Usuarios de 1 asadero
{{getMyOwnAsaderos}}
addUserToAsadero --> Añadir usuario al asadero
rejectUsersFromAsadero --> Cerrar plazo
updateAsadero --> Actualizar asadero
deleteUserFromAsadero --> Borrar usuario del asadero
disableAsadero --> Owner lo deshabilita y sale un mensaje en pantalla para los usuarios
*/

module.exports = {
  createAsadero,
  getAllMyAsaderos,
};
