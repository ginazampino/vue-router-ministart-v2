const path = require('path');
const express = require('express');
const app = express();
const history = require('connect-history-api-fallback');

app.use(history({}));
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(1770, () => {
    console.log('Server is now running on: http://localhost:' + 1770);
});