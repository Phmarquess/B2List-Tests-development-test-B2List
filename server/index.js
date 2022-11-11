const express = require("express");
const app = express();
const mysql =  require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host:"localhost",
    user: "root",
    password:"password",
    database:"Banco",
})

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const user = req.body.user;
    const  cpf = req.body.cpf;

    db.query("SELECT * FROM usuario WHERE email =?",[email],
    (err, result) => {
        if(err){
        res.send(err);
        }
        if(result.length == 0){
            db.query("INSERT INTO usuario (name, email, user, cpf) VALUES(?, ?, ?, ?)",
            [name, email, user, cpf],
            (err, result)=>{
                if (err){
                    res.send(err);
                }
                res.send({ msg:"cadastrado"});
            }
            );
                
        }else{
        res.send({ msg:"Ja cadastrado"});
    }
          
        
    }
    
    
    )
})

 app.get("/getUser", (req, res)=> {
    let SQL ="SELECT * form usuario";

    db.query(SQL, (err, result)=>{
        if(err) console.log(err);
        else res.send(result);
    });
 });



app.listen(3001, ()=>{
    console.log("Rodando na porta 3001");
});