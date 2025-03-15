const mongoose = require('mongoose');
// Add your mongodb url below
const url = 'mongodb url';
const DB = process.env.DATABASE || url;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connection successful');
})
.catch((err) => {
    console.log('MongoDB connection error:', err.message);
    process.exit(1); // Exit the process if connection fails
});

// Export the mongoose connection
module.exports = mongoose.connection;

