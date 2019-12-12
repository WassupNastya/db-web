const fs = require("fs");
let dbWorld = fs.readFileSync("DBWorld.txt", "utf8");

const createDB = (req, res, db) => {
  db.raw(`SELECT * FROM CREATE_DB('${req.query.name}')`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const dropDB = (req, res, db) => {
  db.raw(`SELECT * FROM DROP('${req.query.name}')`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const createSchema = (req, res, db) => {
  db.raw(dbWorld)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const getCandidates = (req, res, db) => {
  db.raw("SELECT * FROM getCandidates()")
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const getAbstracts = (req, res, db) => {
  db.raw("SELECT * FROM getAbstracts()")
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const getOffers = (req, res, db) => {
  db.raw("SELECT * FROM getOffers()")
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const getReviews = (req, res, db) => {
  db.raw("SELECT * FROM getReviews()")
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const getInterviews = (req, res, db) => {
  db.raw("SELECT * FROM getInterviews()")
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteAllCandidates = (req, res, db) => {
  db.raw("CALL deleteAllCandidates()")
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteAllAbstracts = (req, res, db) => {
  db.raw("CALL deleteAllAbstracts()")
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteAllOffers = (req, res, db) => {
  db.raw("CALL deleteAllOffers()")
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteAllReviews = (req, res, db) => {
  db.raw("CALL deleteAllReviews()")
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteAllInterviews = (req, res, db) => {
  db.raw("CALL deleteAllInterviews()")
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteAll = (req, res, db) => {
  db.raw("CALL  deleteAll()")
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const getCandidateBySurname = (req, res, db) => {
  db.raw(`SELECT * FROM GetCandidateBySurname('${req.query.surname}')`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const getAbstractByEnglish = (req, res, db) => {
  db.raw(`SELECT * FROM GetAbstractByEnglish('${req.query.english}')`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const getOfferByIsProposed = (req, res, db) => {
  db.raw(`SELECT * FROM GetOfferByIsProposed('${req.query.isProposed}')`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const getReviewByConductedBy = (req, res, db) => {
  db.raw(`SELECT * FROM GetReviewByConductedBy('${req.query.conductedBy}')`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const getInterviewByPlace = (req, res, db) => {
  db.raw(`SELECT * FROM GetInterviewByPlace('${req.query.place}')`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const addCandidate = (req, res, db) => {
  db.raw(
    `CALL AddCandidate('${req.query.surname}','${req.query.name}','${req.query.patronymic}','${req.query.skill}','${req.query.source}','${req.query.status}','${req.query.result}')`
  )
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const addAbstract = (req, res, db) => {
  db.raw(
    `CALL AddAbstract(${req.query.salary},'${req.query.english}',${req.query.hours})`
  )
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const addOffer = (req, res, db) => {
  db.raw(`CALL AddOffer('${req.query.isProposed}','${req.query.isAdopted}')`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const addReview = (req, res, db) => {
  db.raw(`CALL AddReview('${req.query.conductedBy}','${req.query.comments}')`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const addInterview = (req, res, db) => {
  db.raw(
    `CALL AddInterview(${req.query.candidateId},${req.query.reviewId},${req.query.abstractId},${req.query.offerId},'${req.query.date}','${req.query.place}','${req.query.dd}')`
  )
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const setCandidate = (req, res, db) => {
  db.raw(
    `CALL setCandidate(${req.query.candidateId},'${req.query.surname}','${req.query.name}','${req.query.patronymic}','${req.query.skill}','${req.query.source}','${req.query.status}','${req.query.result}')`
  )
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const setAbstract = (req, res, db) => {
  db.raw(
    `CALL setAbstract(${req.query.abstractId},${req.query.salary},'${req.query.english}',${req.query.hours})`
  )
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const setOffer = (req, res, db) => {
  db.raw(
    `CALL setOffer(${req.query.offerId},'${req.query.isProposed}','${req.query.isAdopted}')`
  )
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const setReview = (req, res, db) => {
  db.raw(
    `CALL setReview(${req.query.reviewId},'${req.query.conductedBy}','${req.query.comments}')`
  )
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const setInterview = (req, res, db) => {
  db.raw(
    `CALL setInterview(${req.query.interviewId},${req.query.candidateId},${req.query.reviewId},${req.query.abstractId},${req.query.offerId},'${req.query.date}','${req.query.place}','${req.query.dd}')`
  )
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteCandidateById = (req, res, db) => {
  db.raw(`CALL deleteCandidateById(${req.query.candidateId})`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteAbstractById = (req, res, db) => {
  db.raw(`CALL deleteAbstractById(${req.query.abstractId})`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteOfferById = (req, res, db) => {
  db.raw(`CALL deleteOfferById(${req.query.offerId})`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteReviewById = (req, res, db) => {
  db.raw(`CALL deleteReviewById(${req.query.reviewId})`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteInterviewById = (req, res, db) => {
  db.raw(`CALL deleteInterviewById(${req.query.interviewId})`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteCandidateBySurname = (req, res, db) => {
  db.raw(`CALL DeleteCandidateBySurname('${req.query.surname}')`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteAbstractByEnglish = (req, res, db) => {
  db.raw(`CALL DeleteAbstractByEnglish('${req.query.english}')`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteOfferByIsProposed = (req, res, db) => {
  db.raw(`CALL DeleteOfferByIsProposed('${req.query.isProposed}')`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteReviewByConductedBy = (req, res, db) => {
  db.raw(`CALL DeleteReviewByConsuctedBy('${req.query.conductedBy}')`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

const deleteInterviewByPlace = (req, res, db) => {
  db.raw(`CALL DeleteInterviewByPlace('${req.query.place}')`)
    .then(items => res.json(items.rows))
    .catch(err => res.status(400).json({ dbError: "db error" }));
};

module.exports = {
  dropDB,
  createSchema,
  createDB,
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
  addInterview,
  setCandidate,
  setAbstract,
  setOffer,
  setReview,
  setInterview,
  deleteCandidateById,
  deleteAbstractById,
  deleteOfferById,
  deleteReviewById,
  deleteInterviewById,
  deleteCandidateBySurname,
  deleteAbstractByEnglish,
  deleteOfferByIsProposed,
  deleteReviewByConductedBy,
  deleteInterviewByPlace
};
