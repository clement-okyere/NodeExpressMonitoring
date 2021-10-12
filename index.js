import newrelic from "newrelic";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { getGender}  from "./utils/helper.js";
import { Person } from "./models/person.js";
import { db } from "./startup/database.js"


const app = express();
const PORT = process.env.PORT || 3000;
console.log(`Port: ${PORT}`)

app.use(express.json());
app.use(express.urlencoded({extended: true}));

db();

app.get('/', (req, res) => {
   res.status(201).send("node express monitor is running successfully")
});

// test new relic tracing to a postgresql database
app.post('/person', async (req, res) => {

    const {firstName, lastName } = req.body;
    await Person.create
    (
        {
            firstName,
            lastName
        }
    );
  
 res.status(201).send(req.body);
});

app.get('/error', (req, res) => {
    res.status(500).send("Oops! An error occurred!");
});

// test new relic tracing to an external service
app.get('/gender', async (req, res) => {
    const name = req.query.name;

    if(!name)
       return res.status(400).send("name parameter is reequired!");

    const gender = await getGender(name);

    res.send({gender})

})

app.listen(PORT , () => {
    console.log(`NodeExpressMonitor Server is listening on port ${PORT}`);
});