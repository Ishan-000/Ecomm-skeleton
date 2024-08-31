
const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const auth = require('../middleware/auth');

router.get('/', auth, cartController.getCart);
router.post('/add', auth, cartController.addToCart);
router.delete('/remove/:productId', auth, cartController.removeFromCart);
router.put('/:itemId', auth, cartController.updateQuantity);

module.exports = router;




