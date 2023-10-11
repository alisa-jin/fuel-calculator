const Food = require('../models/FoodModel')
const foodController = {};

foodController.getFoods = (req, res, next) => {
    Food.find({})
    .then(data => {
        res.locals.allFoods = data;
        console.log('hihihi', data)
        return next();
    })
    .catch(err => {
        return next({
            log: `foodController.getFoods: Error ${err}`,
            msg: `Error in foodController.getFoods`
        })
    })
}


foodController.addFood = (req, res, next) => {
    const { name, brand, category, water, image } = req.body;
    console.log('HEELLOOOOOOO')
    Food.create({name, brand,category, water, image})
    .then(data => {
        res.locals.newFood = data;
        return next();
    })
    .catch(err => {
        return next({
            log: `foodController.addFood`
        })
    })
}

module.exports = foodController;

