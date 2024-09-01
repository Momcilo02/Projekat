const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Radi server');
});

app.listen(port, () => {
    console.log(`Server je pokrenut na http://localhost:${port}`);
});
