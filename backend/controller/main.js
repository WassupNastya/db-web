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

  const postTableData = (req, res, db) => {
    const { first, last, email, phone, location, hobby } = req.body
    const added = new Date()
    db('customers').insert({first, last, email, phone, location, hobby, added})
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  const putTableData = (req, res, db) => {
    const { id, first, last, email, phone, location, hobby } = req.body
    db('customers').where({id}).update({first, last, email, phone, location, hobby})
      .returning('*')
      .then(item => {
        res.json(item)
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  const deleteTableData = (req, res, db) => {
    const { id } = req.body
    db('customers').where({id}).del()
      .then(() => {
        res.json({delete: 'true'})
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }
  
  module.exports = {
    getCandidates,
    getAbstracts,
    getOffers,
    getReviews,
    getInterviews,
    postTableData,
    putTableData,
    deleteTableData
  }