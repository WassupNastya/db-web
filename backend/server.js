const express = require('express')

const helmet = require('helmet')
const bodyParser = require('body-parser') 
const cors = require('cors')  
const morgan = require('morgan') 

var db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '12345',
    database : 'db-lab'
  }
});


const main = require('./controller/main')

const app = express()

const whitelist = ['http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(helmet())
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(morgan('combined')) 

app.get('/', (req, res) => res.send('hello world'))
app.get('/candidates', (req, res) => main.getCandidates(req, res, db))
app.get('/abstracts',(req,res) => main.getAbstracts(req,res,db))
app.get('/offers',(req,res) => main.getOffers(req,res,db))
app.get('/reviews',(req,res) => main.getReviews(req,res,db))
app.get('/interviews',(req,res) => main.getInterviews(req,res,db))

app.get('/deleteAllCandidates',(req,res) => main.deleteAllCandidates(req,res,db))
app.get('/deleteAllAbstracts',(req,res) => main.deleteAllAbstracts(req,res,db))
app.get('/deleteAllOffers',(req,res) => main.deleteAllOffers(req,res,db))
app.get('/deleteAllReviews',(req,res) => main.deleteAllReviews(req,res,db))
app.get('/deleteAllInterviews',(req,res) => main.deleteAllInterviews(req,res,db))

app.get('/deleteAll',(req,res) => main.deleteAll(req,res,db))

app.get('/addReview',(req,res) => main.addReview(req,res,db));
app.post('/crud', (req, res) => main.postTableData(req, res, db))
app.put('/crud', (req, res) => main.putTableData(req, res, db))
app.delete('/crud', (req, res) => main.deleteTableData(req, res, db))

app.get('/getCandidateBySurname', (req, res) => main.getCandidateBySurname({surname: 'Ivanov'}, res, db))

app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT || 3000}`)
})