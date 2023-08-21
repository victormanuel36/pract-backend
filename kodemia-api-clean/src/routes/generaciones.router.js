const express = require("express");
const generations = require("../usecases/generaciones.usecase")

const router = express.Router();

router.get("/", (request, response) => {
    const allGenerations = generations.getAll();

    response.json({
        message: "GET Generations",
        generations: allGenerations

    });
});

router.post("/", (request, response) => {
    const { id, program, generation } = request.body;

    generations.create( id, program, generation );

    response.json({
        message: "generation created",
    });
});


router.delete("/:program",  (request, response) => {
    const { program } = request.params;

    generations.remove(program);

    response.json({
        message: "generation deleteada"
    })
})

module.exports = router;

