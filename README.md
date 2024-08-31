# E-Commerce Platform

A full-stack e-commerce application with React frontend and Node.js backend.

## Frontend (React)

Located in `Frontend/src/`

### Key Components:

- `App.jsx`: Main component, sets up routing and overall structure
- `ProductList`: Displays list of products
- `ProductDetails`: Shows detailed view of a single product
- `Cart`: Manages shopping cart functionality
- `Login` and `Register`: User authentication forms
- `UserProfile`: Displays and allows editing of user information
- `Checkout`: Handles order placement
- `Navbar`: Navigation component
- `Notification`: Displays system messages to users

### State Management:

- Redux for global state management
- Actions for products, authentication, cart, orders, and user profile

### Routing:

- React Router for navigation
- Protected routes for authenticated users

### Styling:

- Tailwind CSS for responsive design

## Backend (Node.js)

(Assuming a typical Express.js setup to complement the frontend)

### Key Features:

- RESTful API endpoints for:
  - Product management
  - User authentication
  - Cart operations
  - Order processing
  - User profile management

### Authentication:

- JWT-based authentication
- Token storage in localStorage

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   cd Frontend && npm install
   cd ../Backend && npm install
   ```
3. Set up environment variables
4. Start the backend server
5. Start the frontend development server:
   ```
   cd Frontend && npm start
   ```

## Features

- Product browsing and search
- User registration and authentication
- Shopping cart functionality
- Secure checkout process
- User profile management

## Technologies

- Frontend: React, Redux, React Router, Tailwind CSS
- Backend: Node.js, Express.js (assumed)
- Authentication: JWT

## Future Enhancements

- Add payment gateway integration
- Implement admin dashboard
- Enhance search functionality with filters
