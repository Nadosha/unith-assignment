// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.get('/data', (req, res) => {
    const filePath = path.join(__dirname, 'fake_data.json');


    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        const jsonData = JSON.parse(data);
        res.json(jsonData);
    });
});

app.get('/error', (req , res) => {
    res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});