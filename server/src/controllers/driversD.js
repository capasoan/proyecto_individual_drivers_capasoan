const fs = require('fs');
const path = require('path')


const URL  = path.resolve(__dirname, "../../api/db.json");

const driversD =(req, res) => {

    const {id}=req.query
    
    try {

        fs.readFile(URL, 'utf-8', (err, data) => {
            if(err) {
              console.log('error: ', err);
             // res.status(404).json({ error: "Error reading file" });
            } else {
             // console.log(data);
              res.status(201).json(data);
            }
          });
          

    }catch (error) {
            res.status(404).json({ error: "Driver not found" });
        
    }

}
module.exports = driversD;