import { objectToQueryString } from "../heplers";

export async function setCandidate({ candidateId, data }) {
  let url = "http://localhost:3000/setCandidate";
  url += "?" + objectToQueryString({ candidateId, ...data });
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function setAbstract({ abstractId, data }) {
  let url = "http://localhost:3000/setAbstract";
  url += "?" + objectToQueryString({ abstractId, ...data });
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function setOffer({ offerId, data }) {
  let url = "http://localhost:3000/setOffer";
  url += "?" + objectToQueryString({ offerId, ...data });
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function setReview({ reviewId, data }) {
  let url = "http://localhost:3000/setReview";
  url += "?" + objectToQueryString({ reviewId, ...data });
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function setInterview({ interviewId, data }) {
  let url = "http://localhost:3000/setInterview";
  url += "?" + objectToQueryString({ interviewId, ...data });
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}
