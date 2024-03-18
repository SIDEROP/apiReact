import mysql from "mysql";

let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db"
})


 export let dbConnect = async ()=>{
    con.connect((err)=>{
        if (err) {
            console.log("sql not connect")
            process.exit(1)
        } else {
            console.log("sql connected successfuly")
        }
    })
}


export default con