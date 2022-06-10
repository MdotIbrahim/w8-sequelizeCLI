const Director = require("./table");

exports.addDirector = async (movieObj) => {
    try {
        const newDirector = await Director.create({fullname: movieObj.fullname});
        console.log(`Successfully added ${newDirector.dataValues.fullname} to the database of Directors`);
    } catch (error) {
        console.log(error)
    }
}

exports.listDirectors = async () => {
    try {
        const directorList = await Director.findAll();
        console.log(directorList)
        for (let i = 0; i < directorList.length; i++) {
            console.log(`Director Name: ${directorList[i].dataValues.fullname}`);
        }
    } catch (error) {
        console.log(error)
    }
}

exports.updateDirector = async (movieObj) => {
    try {
        const updatedDirector = await Tv.update({ fullname: movieObj.newfullname}, {
            where: {
                fullname: movieObj.fullname
            }
        });
        // console.log(updatedDirector);
        if (updatedDirector[0] > 0) {
            console.log("The director's information has been updated!")
        }else {
            console.log("Something went wrong")
        }
    } catch (error) {
        console.log(error)
    }
};

exports.deleteDirector = async (movieObj) => {
    try {
        const deletedDirectorValue = await Director.destroy({
            where: {
                fullname: movieObj.fullname
            }
        });
        // console.log(deletedDirectorValue);
        if (deletedDirectorValue > 0) {
            console.log("The director has been erased!")
        }else {
            console.log("Something went wrong. Did you use the parameters --delete --fullname?")
        }
    } catch (error) {
        console.log(error)
    }
};