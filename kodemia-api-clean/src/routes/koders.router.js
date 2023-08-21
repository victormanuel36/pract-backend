const express = require("express");
const koders = require("../usecases/koders.usecase");


const router = express.Router();

// listar todos los koders
router.get("/", (request, response) => {
    const allKoders = koders.getAll();

    response.json({
        message: "GET Koders",
        koders: allKoders,
    });
});

// crear un koder
router.post("/", (request, response) => {
    const { name, email, program, generation } = request.body;

    koders.create(name, email, program, generation);

    response.json({
        message: "Koder Created",
    });
});


// borrar koder
router.delete("/:name", (request, response) => {
    const { name } = request.params;

    koders.remove(name);

    response.json({
        message: "Koder deleted",
    });
});

module.exports = router;
