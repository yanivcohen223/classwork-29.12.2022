const express = require('express')
const router = express.Router()
const path = require('path')
const url = require('url')
const cors = require('cors')
const { rsponse } = require('express')

const port = 9000;

const app = express();
app.use(express.static(path.join('.', '/')));

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static(path.join('.' , '/')))

app.get('/movie' , (req, resp) => {
    resp.writeHead(201);
    resp.end('lord of the rings is my favorite movie!')
})

app.get('/add', (req, resp) => {
    // http://localhost:8080/ add ? x = 3 & y = 4

    console.log(req.url);
    console.log(req.query);

    const x = Number(req.query.x)
    const y = Number(req.query.y)    

    if (isNaN(x)) {
        resp.writeHead(400)
        resp.end(`${req.query.x} is not a number`)
        return
    }
    if (isNaN(y)) {
        resp.writeHead(400)
        resp.end(`${req.query.y} is not a number`)
        return
    }    

    resp.writeHead(200)
    resp.end(`<h1>${x} + ${y} = ${x + y}</h1>`)
    //resp.end(`${JSON.stringify(req.query.x)}`)
})

app.get('/add/:x/:y', (req, resp) => {
    // http://localhost:8080/ add ? x = 3 & y = 4

    console.log(req.url);
    console.log(req.params);

    const x = Number(req.params.x)
    const y = Number(req.params.y)    

    if (isNaN(x)) {
        resp.writeHead(400)
        resp.end(`${req.params.x} is not a number`)
        return
    }
    if (isNaN(y)) {
        resp.writeHead(400)
        resp.end(`${req.params.y} is not a number`)
        return
    }    

    resp.writeHead(200)
    resp.end(`<h1>${x} + ${y} = ${x + y}</h1>`)
    //resp.end(`${JSON.stringify(req.query.x)}`)
})

app.get('/addbody', (req, resp) => {
    console.log(req.url);
    console.log(req.body);

    const x = Number(req.body.x)
    const y = Number(req.body.y) 

    if (isNaN(x)) {
        resp.writeHead(400)
        resp.end(`${req.body.x} is not a number`)
        return
    }
    if (isNaN(y)) {
        resp.writeHead(400)
        resp.end(`${req.body.y} is not a number`)
        return
    }    

    resp.writeHead(200)
    resp.end(`<h1>${y} + ${x} = ${x - y}</h1>`)
    //resp.end(`${JSON.stringify(req.query.x)}`)
})


app.get('/minus', (req, resp) => {
    console.log(req.url);
    console.log(req.query);

    const a = Number(req.query.a)
    const b = Number(req.query.b) 

    if (isNaN(a)) {
        resp.writeHead(400)
        resp.end(`${req.query.a} is not a number`)
        return
    }
    if (isNaN(b)) {
        resp.writeHead(400)
        resp.end(`${req.query.b} is not a number`)
        return
    }    

    resp.writeHead(200)
    resp.end(`<h1>${a} + ${b} = ${a - b}</h1>`)
    //resp.end(`${JSON.stringify(req.query.x)}`)
})

app.get('/minus/:a/:b', (req, resp) => {
    console.log(req.url);
    console.log(req.params);

    const a = Number(req.params.a)
    const b = Number(req.params.b) 

    if (isNaN(a)) {
        resp.writeHead(400)
        resp.end(`${req.params.a} is not a number`)
        return
    }
    if (isNaN(b)) {
        resp.writeHead(400)
        resp.end(`${req.params.b} is not a number`)
        return
    }    

    resp.writeHead(200)
    resp.end(`<h1>${a} + ${b} = ${a - b}</h1>`)
    //resp.end(`${JSON.stringify(req.query.x)}`)
})

app.get('/minusbody', (req, resp) => {
    console.log(req.url);
    console.log(req.body);

    const a = Number(req.body.a)
    const b = Number(req.body.b) 

    if (isNaN(a)) {
        resp.writeHead(400)
        resp.end(`${req.body.a} is not a number`)
        return
    }
    if (isNaN(b)) {
        resp.writeHead(400)
        resp.end(`${req.body.b} is not a number`)
        return
    }    

    resp.writeHead(200)
    resp.end(`<h1>${a} + ${b} = ${a - b}</h1>`)
    //resp.end(`${JSON.stringify(req.query.x)}`)
})


app.listen(port, () => {
    console.log(`listening to port ${port}`);
})