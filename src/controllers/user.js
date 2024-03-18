import con from "../db/connect.js"
import jwt from "jsonwebtoken"

export let userGet = async (req,res)=>{
    con.query("SELECT * FROM student",(err,resul)=>{
        if (err) {
            return console.log("erro")
        }
        res.status(200).json(resul)
    })
}

export let userAuth = async (req,res)=>{
    
    let {email,password} = req.body
    const sql = 'SELECT * FROM student WHERE email = ? AND password = ?';
    
    con.query(sql,[email,password], (err, result) => {
        if (err) {
            return res.status(400).json({mess:"auth err"})
        }else{
            if (result.length > 0) {
                let token = jwt.sign({result},"siderop",{expiresIn:10})
                res.status(200).json({token})
            } else{
                console.log("data not find")
            }
        }
    })
}



export let usercheck = async (req,res)=>{
    let {token} = req.body
    console.log(token)


    jwt.verify(token.trim(),"siderop",(err,decode)=>{
        if (err) {
            return console.log("erro token")
        }

        let {email,password} = decode.result[0]
        
        const sql = 'SELECT * FROM student WHERE email = ? AND password = ?';
        con.query(sql,[email,password], (err, results) => {
            res.status(202).json({login:true})
        })
    })
}

