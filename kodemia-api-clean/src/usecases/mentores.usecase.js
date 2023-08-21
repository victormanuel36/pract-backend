const db = require("../lib/db")

function create (name, program, generation) {
    const newMentors = {
        name,
        program,
        generation,
    };
    const data = db.getData();
    data.mentors.push(newMentors);
    db.updateData(data);

}

function remove(name) {
    const data = db.getData()
    const newMentorsList = data.mentors.filter((mentors) => mentors.name !== name);
    data.mentors = newMentorsList
    db.updateData(data);
}

function getAll() {
    const data = db.getData()
    return data.mentors;
}

module.exports = {
    create,
    remove,
    getAll
};


