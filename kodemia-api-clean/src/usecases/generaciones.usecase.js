const db = require("../lib/db");

function create(id, program, generation) {
    const newGeneration = {
        id,
        program,
        generation,
    };
    const data = db.getData();
    data.generations.push(newGeneration);
    db.updateData(data);
}

function remove(program) {
    const data  = db.getData()
    const newGenerationsList = data.generations.filter((generation) => generation.program !== program);
    data.generations = newGenerationsList;
    db.updateData(data);

}
function getAll() {
    const data = db.getData()
    return data.generations;
}

module.exports = {
    create,
    remove,
    getAll
};

