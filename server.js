const express = require("express");
const exphbs = require("express-handlebars");
const allRoutes = require("./controllers");
const session = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const favicon = require("serve-favicon")
const path = require("path");

// import chalk from 'chalk';
// console.log(chalk.blue('Hello world!'));
// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;
// Requiring our models for syncing
const { User } = require("./models");
// Sets up the Express app to handle data parsing
app.use (favicon(path.join(__dirname,'public', 'favicon.ico')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 2 * 60 * 60 * 1000,
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};
app.use(session(sess));
// Static directory
app.use(express.static("public"));

const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use("/", allRoutes);

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});