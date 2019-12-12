const express = require("express");

const helmet = require("helmet");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");


var db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "12345",
    database: "testcreate"
  }
});
const main = require("./controller/main");

const app = express();

const whitelist = ["http://localhost:3001"];
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};
app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan("combined"));
app.get("/createDB", (req, res) => {
  main.createDB(req, res, db);
});
app.get("/createSchema", (req, res) => {
  db = require("knex")({
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "12345",
      database: req.query.name
    }
  });
  main.createSchema(req, res, db);
});
app.get("/candidates", (req, res) => main.getCandidates(req, res, db));
app.get("/abstracts", (req, res) => main.getAbstracts(req, res, db));
app.get("/offers", (req, res) => main.getOffers(req, res, db));
app.get("/reviews", (req, res) => main.getReviews(req, res, db));
app.get("/interviews", (req, res) => main.getInterviews(req, res, db));

app.get("/deleteAllCandidates", (req, res) =>
  main.deleteAllCandidates(req, res, db)
);
app.get("/deleteAllAbstracts", (req, res) =>
  main.deleteAllAbstracts(req, res, db)
);
app.get("/deleteAllOffers", (req, res) => main.deleteAllOffers(req, res, db));
app.get("/deleteAllReviews", (req, res) => main.deleteAllReviews(req, res, db));
app.get("/deleteAllInterviews", (req, res) =>
  main.deleteAllInterviews(req, res, db)
);

app.get("/deleteAll", (req, res) => main.deleteAll(req, res, db));

app.get("/getCandidateBySurname", (req, res) =>
  main.getCandidateBySurname(req, res, db)
);
app.get("/getAbstractByEnglish", (req, res) =>
  main.getAbstractByEnglish(req, res, db)
);
app.get("/getOfferByIsProposed", (req, res) =>
  main.getOfferByIsProposed(req, res, db)
);
app.get("/getReviewByConductedBy", (req, res) =>
  main.getReviewByConductedBy(req, res, db)
);
app.get("/getInterviewByPlace", (req, res) =>
  main.getInterviewByPlace(req, res, db)
);

app.get("/addCandidate", (req, res) => main.addCandidate(req, res, db));
app.get("/addAbstract", (req, res) => main.addAbstract(req, res, db));
app.get("/addOffer", (req, res) => main.addOffer(req, res, db));
app.get("/addReview", (req, res) => main.addReview(req, res, db));
app.get("/addInterview", (req, res) => main.addInterview(req, res, db));

app.get("/setCandidate", (req, res) => main.setCandidate(req, res, db));
app.get("/setAbstract", (req, res) => main.setAbstract(req, res, db));
app.get("/setOffer", (req, res) => main.setOffer(req, res, db));
app.get("/setReview", (req, res) => main.setReview(req, res, db));
app.get("/setInterview", (req, res) => main.setInterview(req, res, db));

app.get("/deleteCandidateById", (req, res) =>
  main.deleteCandidateById(req, res, db)
);
app.get("/deleteAbstractById", (req, res) =>
  main.deleteAbstractById(req, res, db)
);
app.get("/deleteOfferById", (req, res) => main.deleteOfferById(req, res, db));
app.get("/deleteReviewById", (req, res) => main.deleteReviewById(req, res, db));
app.get("/deleteInterviewById", (req, res) =>
  main.deleteInterviewById(req, res, db)
);

app.get("/deleteCandidateBySurname", (req, res) =>
  main.deleteCandidateBySurname(req, res, db)
);
app.get("/deleteAbstractByEnglish", (req, res) =>
  main.deleteAbstractByEnglish(req, res, db)
);
app.get("/deleteOfferByIsProposed", (req, res) =>
  main.deleteOfferByIsProposed(req, res, db)
);
app.get("/deleteReviewByConductedBy", (req, res) =>
  main.deleteReviewByConductedBy(req, res, db)
);
app.get("/deleteInterviewByPlace", (req, res) =>
  main.deleteInterviewByPlace(req, res, db)
);

app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT || 3000}`);
});
