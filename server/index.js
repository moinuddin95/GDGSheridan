import express from 'express';
import fs from 'fs';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json())
app.get('/',(req, res) => {
    res.redirect('/data');
})
app.get('/data', (req, res) => {
    let data = fs.readFileSync('./model/Events.json', {encoding: 'utf-8'});
    res.json(JSON.parse(data));
    // res.send("Hello");
});

app.listen(5000, () => {
    console.log('Listening on port 5000.');
})