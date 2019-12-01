    const getCandidates = (req, res, db) => {
      db.raw('SELECT * FROM getCandidates()')
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }
    
    const getAbstracts = (req, res, db) => {
      db.raw('SELECT * FROM getAbstracts()')
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }
  
    const getOffers = (req, res, db) => {
      db.raw('SELECT * FROM getOffers()')
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }

    const getReviews = (req, res, db) => {
      db.raw('SELECT * FROM getReviews()')
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }

    const getInterviews = (req, res, db) => {
      db.raw('SELECT * FROM getInterviews()')
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }

    const deleteAllCandidates = (req, res, db) => {
      db.raw('CALL deleteAllCandidates()')
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }

    const deleteAllAbstracts = (req, res, db) => {
      db.raw('CALL deleteAllAbstracts()')
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }

    const deleteAllOffers = (req, res, db) => {
      db.raw('CALL deleteAllOffers()')
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }

    const deleteAllReviews = (req, res, db) => {
      db.raw('CALL deleteAllReviews()')
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }
    
    const deleteAllInterviews= (req, res, db) => {
      db.raw('CALL deleteAllInterviews()')
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }

    const  deleteAll= (req, res, db) => {
      db.raw('CALL  deleteAll()')
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }
   
    const getCandidateBySurname = ({surname}, res, db) => { 
      db.raw(`SELECT * FROM GetCandidateBySurname('${surname}')`)
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }

    const getAbstractByEnglish = ({english}, res, db) => { 
      db.raw(`SELECT * FROM GetAbstractByEnglish('${english}')`)
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }

    const getOfferByIsProposed = ({isProposed}, res, db) => { 
      db.raw(`SELECT * FROM GetOfferByIsProposed('${isProposed}')`)
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }

    const getReviewByConductedBy = ({conductedBy}, res, db) => { 
      db.raw(`SELECT * FROM GetReviewByConductedBy('${conductedBy}')`)
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))      
    }

    const getInterviewByPlace = ({place}, res, db) => { 
      db.raw(`SELECT * FROM GetInterviewByPlace('${place}')`)
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }

    const addCandidate = ({surname, name, patronymic, skill, source, status, result}, res, db) => { 
      db.raw(`CALL AddCandidate('${surname}','${name}','${patronymic}','${skill}','${source}','${status}','${result}')`)
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }
  
    const addAbstract = ({salary, english, hours}, res, db) => { 
      db.raw(`CALL AddAbstract(${salary},'${english}',${hours})`)
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }
  
    const addOffer = ({isProposed, isAdopted}, res, db) => { 
      db.raw(`CALL AddOffer('${isProposed}','${isAdopted}')`)
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }

    const addReview = ({conductedBy, comments}, res, db) => { 
      db.raw(`CALL AddReview('${conductedBy}','${comments}')`)
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }

    const addInterview = ({candidateId, reviewId, abstractId, offerId, date, place, dd}, res, db) => { 
      db.raw(`CALL AddInterview(${candidateId},${reviewId},${abstractId},${offerId},'${date}','${place}','${dd}')`)
      .then((items) => res.json(items.rows))
      .catch(err => res.status(400).json({dbError: 'db error'}))
    }

  module.exports = {
    getCandidates,
    getAbstracts,
    getOffers,
    getReviews,
    getInterviews,
    deleteAllCandidates,
    deleteAllAbstracts,
    deleteAllOffers,
    deleteAllReviews,
    deleteAllInterviews,
    deleteAll,
    getCandidateBySurname,
    getAbstractByEnglish,
    getOfferByIsProposed,
    getReviewByConductedBy,
    getInterviewByPlace,
    addCandidate,
    addAbstract,
    addOffer,
    addReview,
    addInterview
  }