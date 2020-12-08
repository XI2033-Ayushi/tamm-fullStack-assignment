const express = require("express");
const session = require("express-session");
const fs = require('fs');
const sessionAuth = require("./src/sessionAuth");
const app = express();
const PORT = process.env.PORT || 8000;

//add express session 
app.use(session({secret: 'testing', saveUninitialized: true, resave: true}));


//add reggular express for api/proxy or pub/proxy 
app.get(/^\/(api|pub)\/(proxy)/, sessionAuth, (req,res)=>{
    console.log("proxy req>>>");
    res.send({url: "reach successful", session: "true"})
})

app.get("/save/:id", sessionAuth, (req,res)=>{
    const _id = req.params.id;
    try {
        // toString use for transform buffer data to string.
        let data = fs.readFileSync(`src/${_id}.json`).toString(); 
        data = JSON.parse(data);
        res.send({...data})
    }catch (e){
        res.status(400).send({error:"file not find"})
    }
})

app.post("/save/:id", sessionAuth, (req,res)=>{
    const _id = req.params.id;
    // console.log("post req>>>",_id, req.body);
    try {
        let insertObj = req.body || {_id};
        insertObj = JSON.stringify(insertObj);
        fs.writeFileSync(`src/${_id}.json`, insertObj, 'utf8', (err) => {
            if (err) {
                throw new Error();
            } else {
            res.send({message: "file added successfully"}).status(200);
        }});
    } catch (e) {
        res.status(400).send({error: e.message})
    }
})

app.use(express.json());
app.listen(PORT, () => {
  console.log("server is running", PORT);
});
