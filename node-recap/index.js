const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//api/ route
app.get('/', (req, res) => {
    res.send('Hello , I am comming soon,,, yes or no!!');
})

const users = [
    { id: 1, name: 'raju', email: 'raju@gamil.com' },
    { id: 2, name: 'morsalin', email: 'morsalin@gamil.com' },
    { id: 3, name: 'modhu', email: 'modhu@gamil.com' },
    { id: 4, name: 'haniful', email: 'haniful@gamil.com' },
    { id: 5, name: 'pro', email: 'pro@gamil.com' },
]
// app.get('/users', (req,res) =>{
//     res.send({id:1, name:'jhon', email:'haniful@gmail.com'});
// } )
app.get('/users', (req, res) => {
    // filter by search query parameter
    // console.log("query", req.query);
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const match = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(match);
    }
    else{
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user);
})

app.post('/user', (req, res) => {

    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port, () => {
    console.log('the code is runnding', port);
})