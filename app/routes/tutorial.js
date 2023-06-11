/** @format */

const router = require("express").Router();
const {
    get_tutorial_by_id,
    post_tutorial,
    put_tutorial_by_id,
    patch_tutorial_by_id,
    delete_tutorial_by_id,
    get_all_tutorials,
} = require("../controllers/index");

// get a specific tutorial
router.get("/:id", get_tutorial_by_id);

// put a tutorial
router.put("/:id", put_tutorial_by_id);

// update a tutorial
router.patch("/:id", patch_tutorial_by_id);

// delete a tutorial
router.delete("/:id", delete_tutorial_by_id);

// post a tutorial
router.post("/", post_tutorial);

// get a list of tutorials
router.get("/", get_all_tutorials);

module.exports = router;
