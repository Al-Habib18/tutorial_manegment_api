/** @format */
const Tutorial = require("../models/model");
const create_tutorial = async (title, description, published) => {
    if (!title || !description || !published) {
        throw error("Invalid title or description or published");
    }

    let tutorial = new Tutorial({ title, description, published });
    // await tutorial.save();
    return tutorial.save();
};
const find_by_id = (id) => {
    return Tutorial.findById(id);
};

const all_tutorials = async () => {
    return Tutorial.find();
};

const update_tutorial = (id, data) => {
    return Tutorial.findByIdAndUpdate(id, { ...data }, { new: true });
};

const delete_by_id = (id) => {
    return Tutorial.findOneAndDelete(id);
};
module.exports = {
    create_tutorial,
    find_by_id,
    all_tutorials,
    update_tutorial,
    delete_by_id,
};
