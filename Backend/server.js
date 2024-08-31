require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const orderRoutes = require('./routes/orders');
const userProfileRoutes = require('./routes/users');

const app = express();

// Connect Database
connectDB();
// Init Middleware
app.use(express.json());


const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
  };

app.use(cors(corsOptions));


// app.use(cors());

// Define Routes
app.use('/api/v1', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/user-profile', userProfileRoutes);

// Error Handler
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));