const db = require("../lib/db");

function create(name, email, program, generation) {
    const newKoder = {
        name,
        email,
        program,
        generation,
    };
    const data = db.getData(); //leemos la informacion de la db, obtener infomacion
    data.koders.push(newKoder); //agregar la informacion a la lista
    db.updateData(data); // volvemos a escribir en la db, actualiza la informacion
};

function remove(name) {
    const data = db.getData();
    const newKodersList = data.koders.filter((koder) => koder.name !== name);
    data.koders = newKodersList; // sustituir el objeto anterio por el nuevo arreglo
    db.updateData(data); // actualizar la nueva data sin el koder
};

function getAll() {
    const data = db.getData();
    return data.koders;
};



module.exports = {
    create,
    remove,
    getAll,
};