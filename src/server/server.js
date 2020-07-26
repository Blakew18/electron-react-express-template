const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

// Serve the static files from the React app
app.use(cors());
// app.use(express.static(path.join(__dirname, 'client/public')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});


const port = process.env.PORT || 3001;
const startExpress = () => app.listen(port);

console.log('App is listening on port ' + port);

module.exports.startExpress = startExpress;