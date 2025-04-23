// Import Express
const express = require('express');

// Setup untuk server Express
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Router
const routeMakan = require('./routes/makan.route');
app.use('/makan', routeMakan);

// Jalankan Express pada port yang sudah ditetapkan
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});