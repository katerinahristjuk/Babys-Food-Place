const Recipe = require('../models/recipeModel');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const uploadImg = (req, res) => {
    try {
        const img = req.files.recipe; //req.files - files e atribut vo 
                    //req.body -> form-data ->key (document) -> text/file
      
        //1.TYPE filter
        const imgTypes = [ 'image/jpeg', 'image/gif', 'image/png'];
        if(!imgTypes.includes(img.mimetype)) {
            return res.status(400).send(`Don't accept such image format :(`)
        };
        //2.SIZE filter
        const imgMaxSize = 20 * 1024 * 1024; //20MB
        if(img.size > imgMaxSize){
            return res.status(400).send(`This image is too large! Max: 20MB :(`)
        }
        //3. Folder for uploads:
        const uploadFolder = path.join(__dirname, '..', '/uploads'); // !!!da se dodade `/uploads/${req.user.id}`
        if(!fs.existsSync(uploadFolder)){
            fs.mkdirSync(uploadFolder);
        }
                // ZA novite papki so id-user vo uploads:
                // const uploadsDirectory = path.join(__dirname, '..', 'uploads');
                // if (!fs.existsSync(uploadsDirectory)) {
                // fs.mkdirSync(uploadsDirectory);
                // }
            
                // const storageDirectory = path.join(__dirname, '..', 'uploads', req.user.id);
                // if (!fs.existsSync(storageDirectory)) {
                // fs.mkdirSync(storageDirectory);
                // }
        //4. Filename:
        const imgName = `${img.name}_${new Date().getTime()/1000}`
            // const imgName = `${img.name}_${random.string(5)}`
        //5. Save img in uploadFolder:
        img.mv(`${uploadFolder}/${imgName}`) //('/uploads/${img.name}_${new Date()}')
        res.status(201).send({
            message: `Successful upload of ${imgName} image! :)`, 
            img
        })   
    } catch (error) {
        res.status(500).send(error);
    }
}

const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).send(recipes);
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`)
    }
};

const createRecipe = async (req, res) => {
        try {
        const newRecipe = Recipe(req.body);
        
        await newRecipe.save();

        res.status(201).send(newRecipe);
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`)
    }
}

const fetchOne = async (req, res) => {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findById(id);

        res.status(200).send({
            error: false,
            message: `Recipe ${recipe.title} is here :)`,
            recipe
        });
    } catch (error) {
      res.status(500).send(`Internal server error: ${error}`);  
    }
};

const updateRecipe = async (req, res) => {
    const { id: _id } = req.params; 

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send(`No recipe with id: ${_id}`);
    };
    const body = req.body;
    const updatedRecipe = await Recipe.findByIdAndUpdate(_id, body, {new: true});

    res.status(200).send({
        error: false,
        message: `Recipe ${_id} is updated :)`,
        updatedRecipe
    })
         
}

const likeRecipe = async (req, res) => {
    const { id } = req.params;

    try {
        let recipe = await Recipe.findById(id);
        let likedRecipe = await Recipe.findByIdAndUpdate(id, { likeCount: recipe.likeCount + 1 }, { new: true });

        res.status(200).send({
            error: false,
            message: `You liked ${recipe.title} recipe.`,
            likedRecipe
        })
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`)
    }
}

const deleteRecipe = async (req, res) => {
    const { id } = req.params;
    try{
        var deletedRecipe = await Recipe.findByIdAndDelete(id);
        res.status(200).send({
            error: false,
            message: `Recipe ${id} is deleted`,
            deletedRecipe
        });
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`);
    }
};

const breakfast = async (req, res) => {
    try {
       const breakfast = await Recipe.find({category: 'breakfast'}).exec();
       res.status(200).send({
            error: false,
            message: `Breakfast recipes are here`,
            breakfast: breakfast
        });
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`);
    }
};

const brunch = async (req, res) => {
    try {
       let brunch = await Recipe.find({category: 'brunch'}).exec();
       res.status(200).send({
            error: false,
            message: `Brunch recipes are here`,
            brunch
        });
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`);
    }
};

const lunch = async (req, res) => {
    try {
        // console.log(req.params)
        let lunch = await Recipe.find({category: `lunch`}).exec();
        res.status(200).send({
            error: false,
            message: `Lunch recipes are here`,
            lunch
        });
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`);
    }
};

const dinner = async (req, res) => {
    try {
       let dinner = await Recipe.find({category: 'dinner'}).exec();
       res.status(200).send({
            error: false,
            message: `Dinner recipes are here`,
            dinner
        });
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`);
    }
};

const freshNew = async (req, res) => {
    try {
        let freshNew = await (await Recipe.find().sort({date: -1})).slice(-3);
        res.status(200).send({
            error: false,
            message: `Fresh and New recipes are here`,
            freshNew
        });
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`); 
    }
}

const mostPopular = async (req, res) => {
    try {
        let mostPopular = await (await Recipe.find().sort({likeCount: -1})).slice(0, 6);
        res.status(200).send({
            error: false,
            message: `Popular recipes are here`,
            mostPopular
        })
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`)
    }
}

module.exports = {
    getRecipes, 
    createRecipe,
    fetchOne,
    updateRecipe,
    deleteRecipe,
    breakfast,
    brunch,
    lunch,
    dinner,
    freshNew,
    mostPopular,
    likeRecipe,
    uploadImg
}