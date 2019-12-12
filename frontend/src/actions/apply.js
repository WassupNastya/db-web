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

import {
  deleteReviewById,
  deleteAbstractById,
  deleteCandidateById,
  deleteOfferById,
  deleteInterviewById
} from "./delete";

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

export const add = ({ tableName, newModel, update }) => {
  switch (tableName) {
    case "Candidates":
      addCandidate({ data: newModel, update });
      break;
    case "Abstracts":
      addAbstract({ data: newModel, update });
      break;
    case "Offers":
      addOffer({ data: newModel, update });
      break;
    case "Reviews":
      addReview({ data: newModel, update });
      break;
    case "Interviews":
      addInterview({ data: newModel, update });
      break;
  }
};

export const deleteById = ({ id, tableName }) => {
  switch (tableName) {
    case "Candidates":
      deleteCandidateById({ candidateId: id });
      break;
    case "Abstracts":
      deleteAbstractById({ abstractId: id });
      break;
    case "Offers":
      deleteOfferById({ offerId: id });
      break;
    case "Reviews":
      deleteReviewById({ reviewId: id });
      break;
    case "Interviews":
      deleteInterviewById({ interviewId: id });
      break;
  }
};
