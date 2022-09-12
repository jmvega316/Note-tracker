const router = require('express').Router()
const fs = require('fs');
const { rootCertificates } = require('tls');
const util = require('util');
const { brotliDecompress } = require('zlib');
router.get('/notes', (req,res) => {
    const readFileNow = util.promisify(fs.readFile)
    const db = readFileNow('db/db.json', 'utf8' )
    let allNotes;
    db.then(notes => {

        try {
            allNotes = [].concat(JSON.parse(notes))
        }catch (err){
            allNotes = []
        } 
        res.json(allNotes)
    })

})
let test = 
router.post('/notes', (req,res) => {
    const writeFileNow = util.promisify(fs.writeFile)
    const userInput = req.body
    console.log(req.body)
    writeFileNow('db/db.json',JSON.stringify(req.body))
    res.json(userInput)
    

    // Push the user's data into the db.json file
    //return the user data in the response

})


module.exports = router