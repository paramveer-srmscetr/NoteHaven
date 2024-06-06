const express = require('express');
const connectToMongo = require('./db');
const { query, validationResult } = require('express-validator');
const startServer = async () => {
    await connectToMongo();
    
    const app = express();
    app.use(express.json());

    // Middleware and route setup
 
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
};

startServer();
