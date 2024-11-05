// server.js
require('dotenv').config();
const express = require('express');
const db = require('./db')

const app = express();
const PORT = process.env.PORT ;

// Endpoint dasar
app.get('/', (req, res) => {
    res.send('API Server with MySQL is running');
});

// Endpoint untuk mengambil data dari database MySQL
app.get('/api/users', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM users'); // Query untuk mengambil data
        res.json(rows); // Kirim data sebagai JSON
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
