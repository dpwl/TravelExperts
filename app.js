const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')
var mongo = require('mongodb').MongoClient
const mysql = require('mysql')
var url = 'mongodb://localhost:27017/'


// Create Server
app.listen(8000, (err)=>{
    console.log("Server listening to port 8000...")
});
// Express static - CSS, IMG, JS
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('CSS'));
app.use('/img',express.static(__dirname + '/img'))
app.use(express.static(__dirname + '/JS'))

// Call Different Pages - index, register, contact and 404 Pages
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/register.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/contact.html'))
})

app.get('/thanks-register', (req, res) => {
    res.sendFile(path.join(__dirname + '/thanks-register.html'))
})
app.get('/thanks-booking', (req, res) => {
    res.sendFile(path.join(__dirname + '/thanks-booking.html'))
})
app.get('/order', (req, res) => {
    res.sendFile(path.join(__dirname + '/order.html'))
})

app.post("/post_form", (req, res) => {
    mongo.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
        if (err) throw err;
        var dbo = db.db("custInfo");
        dbo.collection("register").insertOne(req.body, (err, res2) => {
            if (err) throw err;
            console.log("All customer information is inserted.")
        db.close();
        })
    })
    res.redirect('/thanks-register')
})

app.post("/order_form", (req, res) => {
    mongo.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
        if (err) throw err;
        var dbo = db.db("custInfo");
        dbo.collection("booking").insertOne(req.body, (err, res2) => {
            if (err) throw err;
            console.log("All booking information is inserted.")
        db.close();
        })
    })
    res.redirect('/thanks-booking')
})
 
app.get('/view_custInfo', (req, res) => {
    mongo.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}, (err, db)=>{
        if (err) throw err;
        var db_cust = db.db("custInfo");
        var query = {name : "Anant Agarwal"};
        db_cust.collection("all").find(query).toArray( (err, result) => {
            if (err) throw err;
            res.send(JSON.stringify(result));
        })
    })
})

app.get("/vacation-packages", (req,res)=>{
    const conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "travelexperts"
    })
    
    conn.connect((err) => {
        if (err) throw err;
        var sql = "select * from packages";
        // var sql = "select CustFirstName, CustLastName from customers where CustomerId = ?";
        // var data = [106];
        conn.query(sql, (err, result, fields) => {
            if (err) throw err;
            // console.log("Result: " + result);
            // console.log("Fields: " + fields); 
            res.writeHead(200, {"Content-Type":"text/html"})
            fs.readFile("vacation_start.html", (err, data) => {
                if (err) throw err;
                res.write(data) 
            res.write("<table border='1'>")
            res.write("<tr>")
            for (column of fields)
            {
                res.write("<th>" + column.name + "</th>"); 
            }
            res.write("</tr>")
            for (pkg of result)
            {
                res.write("<tr>")
                var values = Object.values(pkg);
                for (i=0; i < values.length; i++)
                {
                    res.write("<td>" + values[i] + "</td>") // <table> tag --> <tr> create rows --> <td> create columns
                }
                res.write("</tr>")
            }
            res.write("</body></html>");

                res.end();
            
            })
        })
        // conn.end((err) => { if (err) throw err })
    })
})

// 404 Page
app.get('*', (req,res)=>{
    res.status(404).send('Sorry, we can NOT find the file reqeusted.');
})

