const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const viewRoutes = require('./routes/viewRoutes');

const app = express();

//arrancar  MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// middleware

// rutas
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/views', viewRoutes);

// arrancarsv
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
