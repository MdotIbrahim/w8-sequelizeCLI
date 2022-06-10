const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/functions");
const { addTv, listTvs, updateTv, deleteTv} = require("./tv/functions");
const { addDirector, listDirectors, updateDirector, deleteDirector} = require("./director/functions");
const Movie = require("./movie/table");
const Director = require("./director/table");
const Tv = require("./tv/table");

const app = async (yargsObj) => {
    if (yargsObj.movie) {
        try {
            Director.hasMany(Movie, {
                foreignKey: "id"
            });
            Movie.belongsTo(Director);
            await sequelize.sync({alter : true}) // must use this otherwise cant insert data into table -- this synchronises all defined tables (that are connected to the connection) with the database. // alter true changes database if change exists.
            if (yargsObj.add) {
                // take movie objects key-value pairs from yargsObj (or send the entire object like im doing), send them to add function and then return movie if successful.
                await addMovie(yargsObj);
            }else if (yargsObj.list) {
                //list all movies from database
                await listMovies();
            }else if (yargsObj.update) {
                // take filter and update key-value pairs from yargsObj,  send them to update function and then return sucesss/failure.
                await updateMovie(yargsObj);
            }else if (yargsObj.delete) {
                // take filter and delete key-value pair from yargsObj,  send them to delete function and then return sucesss/failure.
                await deleteMovie(yargsObj);
            }else {
                console.log("Incorrect CRUD Command. Try --movie --list")
            }
        } catch (error) {
            console.log(error);
        }

    } else if (yargsObj.tv) {
        try {
            Director.hasMany(Tv, {
                foreignKey: "id"
            });
            Tv.belongsTo(Director);
            await sequelize.sync({alter : true}) 
            if (yargsObj.add) {
                await addTv(yargsObj);
            }else if (yargsObj.list) {
                await listTvs();
            }else if (yargsObj.update) {
                await updateTv(yargsObj);
            }else if (yargsObj.delete) {
                await deleteTv(yargsObj);
            }else {
                console.log("Incorrect CRUD Command. Try --tv --list")
            }
        } catch (error) {
            console.log(error);
        }

    }else if (yargsObj.director) {
        try {
            await sequelize.sync() 
            if (yargsObj.add) {
                await addDirector(yargsObj);
            }else if (yargsObj.list) {
                await listDirectors();
            }else if (yargsObj.update) {
                await updateDirector(yargsObj);
            }else if (yargsObj.delete) {
                await deleteDirector(yargsObj);
            }else {
                console.log("Incorrect CRUD Command. Try --director --list")
            }
        } catch (error) {
            console.log(error);
        }

    }else if (yargsObj.raw){
        // raw sql queries using express
    } else {
        console.log(`${Object.keys(yargs.argv)[1]}: Command not found. Incorrect table specified. Have you tried --movie, --tv or --director before adding a CRUD operation?`);
    }

}
console.log();
app(yargs.argv);

//extra - get CRUD operations to work with associations - association/advanced association concepts section of docs