
const Cart = require('../models/cart');
const Product = require('../models/product');

exports.getCart = async (req, res) => {
    try {
      let cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
      if (!cart) {
        cart = new Cart({ user: req.user.id, items: [] });
      }
      res.json(cart.items);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
exports.addToCart = async (req, res) => {
    try {
      const { productId, quantity } = req.body;
      let cart = await Cart.findOne({ user: req.user.id });
  
      if (!cart) {
        cart = new Cart({ user: req.user.id, items: [] });
      }
  
      const existingItem = cart.items.find(item => item.product.toString() === productId);
  
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
  
      await cart.save();
      await cart.populate('items.product').execPopulate();
  
      res.json(cart);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

exports.removeFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (!cart) {
      return res.status(404).json({ msg: 'Cart not found' });
    }
    cart.items = cart.items.filter(item => item.product.toString() !== req.params.productId);
    await cart.save();
    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

  exports.updateQuantity = async (req, res) => {
    try {
      const { quantity } = req.body;
      const cart = await Cart.findOne({ user: req.user.id });
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
      const itemIndex = cart.items.findIndex(item => item._id.toString() === req.params.itemId);
      if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found in cart' });
      }
  
      cart.items[itemIndex].quantity = quantity;
      await cart.save();
      await cart.populate('items.product');
      res.json(cart.items);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };

