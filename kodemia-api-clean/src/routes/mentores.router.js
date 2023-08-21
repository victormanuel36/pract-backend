const express = require("express");
const mentors = require("../usecases/mentores.usecase");

const router = express.Router();

// listar todos los mentores
router.get("/", (request, response) => {
    const allmentors = mentors.getAll();

    response.json({
        message: "GET mentores",
        mentors: allmentors

    });
});

// crear mentores 

router.post("/", (request, response) => {
    const { name, program, generation } = request.body;

    mentors.create( name, program, generation);

    response.json({
        message: "mentors Created",
    });
})

// borrar mentores

router.delete("/:name", (request, response) => {
    const { name } = request.params;

    mentors.remove(name);

    response.json({
        message: " mentors deleteado",
    });
});

module.exports = router;