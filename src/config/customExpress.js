const express = require('express')
const consign = require('consign')
const cors = require('cors')


module.exports = () => {
    const app = express();

    app.use(express.json());

    consign()

        .include('./src/controllers')

        .into(app)

    return app

}