/** @format */

const { Schema, model } = require("mongoose");

const tutorial_schema = new Schema(
    {
        title: String,
        description: String,
        published: Boolean,
    },
    { timestamps: true }
);

const tutorial_model = model("Tutorial_model", tutorial_schema);

module.exports = tutorial_model;
