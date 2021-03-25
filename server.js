const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [
    {
    customerName : "Mark",
    customerEmail: "what@ever.com",
    phoneNumber: "927-978-0352",
    customerID: "mark123",
},
{
    customerName : "Mark",
    customerEmail: "what@ever.com",
    phoneNumber: "927-978-0352",
    customerID: "mark123",
},
{
    customerName : "Mark",
    customerEmail: "what@ever.com",
    phoneNumber: "927-978-0352",
    customerID: "mark123",
},
{
    customerName : "Mark",
    customerEmail: "what@ever.com",
    phoneNumber: "927-978-0352",
    customerID: "mark123",
},
{
    customerName : "Mark",
    customerEmail: "what@ever.com",
    phoneNumber: "927-978-0352",
    customerID: "mark123",
}
]

const waitlist = [
    {
        customerName : "Mark345",
        customerEmail: "what@ever.co364346346m",
        phoneNumber: "927-9736365",
        customerID: "mark375475723",
    }

]


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
            
        }else
        {
            tables.push(newTable);
        }


  res.json(newTable);
});

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));