const productController = require('../controllers/productController.js')

const router = require('express').Router()


//routes
router.post('/addproduct', productController.addproduct)
router.get('/allproducts', productController.getallProducts)
router.get('/published', productController.getPublishedProduct)
router.get('/:id', productController.getOneProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router;
