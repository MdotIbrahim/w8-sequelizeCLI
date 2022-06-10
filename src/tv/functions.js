const Tv = require("./table");

exports.addTv = async (movieObj) => {
    try {
        const newTv = await Tv.create({title: movieObj.title, actor: movieObj.actor, rating: movieObj.rating});
        console.log(`Successfully added ${newTv.dataValues.title} to the database of Tv shows!`);
    } catch (error) {
        console.log(error)
    }
}

exports.listTvs = async () => {
    try {
        const tvList = await Tv.findAll();
        for (let i = 0; i < tvList.length; i++) {
            console.log(`Title: ${tvList[i].dataValues.title} Actor: ${tvList[i].dataValues.actor} Rating: ${tvList[i].dataValues.rating}`);
        }
    } catch (error) {
        console.log(error)
    }
}

exports.updateTv = async (movieObj) => {
    try {
        const updatedTv = await Tv.update({ title: movieObj.newtitle, actor: movieObj.newactor, rating: movieObj.newrating}, {
            where: {
                title: movieObj.title
            }
        });
        // console.log(updatedTv);
        if (updatedTv[0] > 0) {
            console.log("The Tv show has been updated!")
        }else {
            console.log("Something went wrong")
        }
    } catch (error) {
        console.log(error)
    }
};

exports.deleteTv = async (movieObj) => {
    try {
        const deletedTv = await Tv.destroy({
            where: {
                title: movieObj.title
            }
        });
        // console.log(deletedTv);
        if (deletedTv > 0) {
            console.log("The Tv show has been deleted!")
        }else {
            console.log("Something went wrong")
        }
    } catch (error) {
        console.log(error)
    }
};