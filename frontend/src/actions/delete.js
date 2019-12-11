import { objectToQueryString } from "../heplers";

export async function deleteCandidateBySurname(data) {
  let url = "http://localhost:3000/deleteCandidateBySurname";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function deleteAbstractByEnglish(data) {
  let url = "http://localhost:3000/deleteAbstractByEnglish";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function deleteOfferByIsProposed(data) {
  let url = "http://localhost:3000/deleteOfferByIsProposed";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function deleteReviewByConductedBy(data) {
  let url = "http://localhost:3000/deleteReviewByConductedBy";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function deleteInterviewByPlace(data) {
  let url = "http://localhost:3000/deleteInterviewByPlace";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function deleteAllCandidates() {
  fetch("http://localhost:3000/deleteAllCandidates")
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function deleteAllAbstracts() {
  fetch("http://localhost:3000/deleteAllAbstracts")
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function deleteAllOffers() {
  fetch("http://localhost:3000/deleteAllOffers")
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function deleteAllReviews() {
  fetch("http://localhost:3000/deleteAllReviews")
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function deleteAllInterviews() {
  fetch("http://localhost:3000/deleteAllInterviews")
    .then(response => response.json())
    .catch(err => console.log(err));
}
