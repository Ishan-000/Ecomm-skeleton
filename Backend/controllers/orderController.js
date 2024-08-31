const Order = require('../models/order');
const Cart = require('../models/cart');

exports.createOrder = async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
      
      if (!cart || cart.items.length === 0) {
        return res.status(400).json({ msg: 'Cart is empty' });
      }
  
      const order = new Order({
        user: req.user.id,
        items: cart.items,
        total: cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod
      });
  
      await order.save();
  
      // Clear the cart after successful order
      cart.items = [];
      await cart.save();
  
      res.json(order);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  };

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate('items.product');
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

