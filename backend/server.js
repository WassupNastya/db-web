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
    database : 'testcreate'
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

app.get('/getCandidateBySurname',(req,res) => main.getCandidateBySurname({surname: "Ivanov"},res,db))
app.get('/getAbstractByEnglish',(req,res) => main.getAbstractByEnglish({english: 'Inter'},res,db))
app.get('/getOfferByIsProposed',(req,res) => main.getOfferByIsProposed({isProposed: '1'},res,db))
app.get('/getReviewByConductedBy',(req,res) => main.getReviewByConductedBy({conductedBy:'Sidorov'},res,db))
app.get('/getInterviewByPlace',(req,res) => main.getInterviewByPlace({place:'Moscow'},res,db))

app.get('/addCandidate',(req,res) => main.addCandidate({surname:'Ivanov',name:'Ivan',patronymic:'Ivanovich',skill:'SQL',source:'HH',status:'in process',result:'ok'},res,db))
app.get('/addAbstract',(req,res) => main.addAbstract({salary:1000,english:'Advance',hours:20},res,db))
app.get('/addOffer',(req,res) => main.addOffer({isProposed:'1',isAdopted:'0'},res,db))
app.get('/addReview',(req,res) => main.addReview({conductedBy:'Petrov',comments:'test'},res,db))
app.get('/addInterview',(req,res) => main.addInterview({candidateId:7,reviewId:7,abstractId:7,offerId:7,date:'2019-10-02',place:'Moscow',dd:'Nick'},res,db))

app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT || 3000}`)
})