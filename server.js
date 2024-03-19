const express = require('express');
const path = require('path');
const fs=require("fs")
//const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
app.get('/api/notes', (req, res) =>{
    const readNote=fs.readFileSync('./db/db.json',"utf8");
    letParsedNote
    try{
        let ParsedNote =[].concat(JSON.parse(readNote))
    } catch(error) {parsedNote=[]}

res.status(200).json(parsedNote)
} );
app.post('/api/notes',(req, res)=>{
    //post a new note
})
// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
