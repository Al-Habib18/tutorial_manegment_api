/** @format */

const { connect } = require("mongoose");

const connect_db = (url) => {
    return connect(url);
};

module.exports = connect_db;
