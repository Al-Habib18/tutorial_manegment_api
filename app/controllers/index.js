/** @format */
// console.log
const {
    create_tutorial,
    find_by_id,

    all_tutorials,
    update_tutorial,
    delete_by_id,
} = require("../ service/index");

/** @format */
const get_tutorial_by_id = async (req, res, next) => {
    const { id } = req.params;
    try {
        const tutorial = await find_by_id(id);
        if (!tutorial) {
            throw error("tutorial not found", 404);
        }
        return res.status(200).json({ tutorial });
    } catch (e) {
        next(e);
    }
};

const put_tutorial_by_id = async (req, res, next) => {
    const { id } = req.params;
    const { title, description, published } = req.body;

    try {
        let tutorial = await find_by_id(id);
        if (!tutorial) {
            const tutorial = await create_tutorial(
                title,
                description,
                published
            );
            return res.status(201).json(tutorial);
        }
        tutorial = await update_tutorial(id, { title, description, published });
        await tutorial.save();
        return res.status(200).json(tutorial);
    } catch (e) {
        next(e);
    }
};

const patch_tutorial_by_id = async (req, res, next) => {
    const { id } = req.params;
    const { title, description, published } = req.body;

    try {
        let tutorial = await find_by_id(id);
        if (!tutorial) throw error("tutorial not found", 404);

        tutorial = await update_tutorial(id, {
            title: title,
            description: description,
            published,
        });
        await tutorial.save();
        res.status(200).json(tutorial);
    } catch (e) {
        next(e);
    }
};

const delete_tutorial_by_id = async (req, res, next) => {
    const id = req.params.id;

    try {
        const tutorial = await find_by_id(id);
        if (!tutorial) {
            throw error("Tutorial not found", 404);
        }

        await delete_by_id(id);

        return res.status(203).send("tutorial deleted");
    } catch (err) {
        next(err);
    }
};

const post_tutorial = async (req, res, next) => {
    const { title, description, published } = req.body;

    try {
        const tutorial = await create_tutorial(title, description, published);
        return res.status(201).json({ tutorial });
    } catch (e) {
        next(e);
    }
};

const get_all_tutorials = async (req, res, next) => {
    try {
        const tutorials = await all_tutorials();
        return res.status(200).json(tutorials);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    get_tutorial_by_id,
    post_tutorial,
    put_tutorial_by_id,
    patch_tutorial_by_id,
    delete_tutorial_by_id,
    get_all_tutorials,
};
