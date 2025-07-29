const db = require('../models')




//create main model
const Product = db.products
const Review = db.reviews

//main work



//1)create product
const addproduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
}


//2)To get all products
const getallProducts = async (req, res) => {
    let products = await Product.findAll({})
    res.status(200).send(products)
}


//3)get a single product by ID

const getOneProduct = async (req, res) => {
    let id = req.params.id
    let products = await Product.findOne({ where: { id: id } })
    res.status(200).send(products)
}


//4)update product  a by ID

const updateProduct = async (req, res) => {
    let id = req.params.id;

    const product = await Product.update(req.body, { where: { id: id } })
    res.status(200).send('Updated Successfully')
}


//5)Delete product by ID
const deleteProduct = async (req, res) => {
    let id = req.params.id;

    await Product.destroy({ where: { id: id } })
    res.status(200).send('Product is deleted')
}

//6)get published product

const getPublishedProduct = async (req, res) => {
    const products = await Product.findAll({ where: { published: true } })
    res.status(200).send(products)
}

module.exports = {
    addproduct,
    getallProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
}