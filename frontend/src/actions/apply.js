import {
  setCandidate,
  setAbstract,
  setOffer,
  setReview,
  setInterview
} from "./set";

import {
  addCandidate,
  addAbstract,
  addOffer,
  addReview,
  addInterview
} from "./add";

export const edit = ({ id, newModel, tableName }) => {
  switch (tableName) {
    case "Candidates":
      setCandidate({ candidateId: id, data: newModel });
      break;
    case "Abstracts":
      setAbstract({ abstractId: id, data: newModel });
      break;
    case "Offers":
      setOffer({ offerId: id, data: newModel });
      break;
    case "Reviews":
      setReview({ reviewId: id, data: newModel });
      break;
    case "Interviews":
      setInterview({ interviewId: id, data: newModel });
      break;
  }
};

export const add = ({ tableName, newModel }) => {
  switch (tableName) {
    case "Candidates":
      addCandidate(newModel);
      break;
    case "Abstracts":
      addAbstract(newModel);
      break;
    case "Offers":
      addOffer(newModel);
      break;
    case "Reviews":
      addReview(newModel);
      break;
    case "Interviews":
      addInterview(newModel);
      break;
  }
};
