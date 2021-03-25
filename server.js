const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [];

const waitlist = [];


// Routes


app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));


app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, "reserve.html")));


app.get('/api/tables', (req, res) => {
  return res.send(tables);
});
app.get('/api/waitlist', (req, res) => {
  return res.send(waitlist);
});



app.post('/api/tables', (req, res) => {
    const newTable = req.body;

        if (tables.length === 5){
            waitlist.push(newTable)
            res.send(false)
        }else
        {
            tables.push(newTable);
            res.send(true)
        }


  
});

app.delete("/api/clear", (req, res) =>{
    console.log(tables);
    console.log(waitlist);
    
    tables.splice(0, tables.length);
    waitlist.splice(0, waitlist.length);
    console.log(tables);
    console.log(waitlist);
    res.send();
    
})

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));