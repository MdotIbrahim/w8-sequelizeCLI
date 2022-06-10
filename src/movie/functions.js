const Movie = require("./table");

exports.addMovie = async (movieObj) => {
    try {
        const newMovie = await Movie.create({title: movieObj.title, actor: movieObj.actor, rating: movieObj.rating, DirectorId: movieObj.director});// this create function inserts data into table - called insert in mySQL
        // create is when the connection to the database is opened unlike in mongoose where you open the connection immediately and then need to close the connection at the end. Here it is closed automatically after the code has ran asychronously.
        console.log(`Successfully added ${newMovie.dataValues.title} to the database of movies!`);
    } catch (error) {
        console.log(error)
    }
}

exports.listMovies = async () => {
    try {
        const moviesList = await Movie.findAll();
        console.log(moviesList);
        // console.log(moviesList.every(movie => movie instanceof Movie)); // true
        // console.log("All Movies:", JSON.stringify(moviesList, null, 2));
        console.log("\nMovie List:")
        for (let i = 0; i < moviesList.length; i++) {
            console.log(`Title: ${moviesList[i].dataValues.title} Actor: ${moviesList[i].dataValues.actor} Rating: ${moviesList[i].dataValues.rating}, Director ID: ${moviesList[i].dataValues.DirectorId}`);
        }
    } catch (error) {
        console.log(error)
    }
}

exports.updateMovie = async (movieObj) => {
    try {
        const updatedMovie = await Movie.update({ title: movieObj.newtitle, actor: movieObj.newactor, rating: movieObj.newrating, DirectorId: movieObj.newdirector}, {
            where: {
                title: movieObj.title //this is the filter - second argument unlike mongoDB where this was the first argument.
            }
        });
        // console.log(updatedMovie);
        if (updatedMovie[0] > 0) { // an array so index position required
            console.log("The Movie has been updated!")
        }else {
            console.log("Something went wrong.")
        }
    } catch (error) {
        console.log(error)
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        const deletedMovie = await Movie.destroy({
            where: {
                title: movieObj.title
            }
        });
        // console.log(deletedMovie);
        if (deletedMovie > 0) {
            console.log("The Movie has been deleted!")
        }else {
            console.log("Something went wrong")
        }
    } catch (error) {
        console.log(error)
    }
};