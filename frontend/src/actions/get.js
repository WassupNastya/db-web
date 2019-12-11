import { objectToQueryString } from "../heplers";

export async function getAbstractByEnglish({ data, updateTable }) {
  let url = "http://localhost:3000/getAbstractByEnglish";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

export async function getCandidateBySurname({ data, updateTable }) {
  let url = "http://localhost:3000/getCandidateBySurname";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

export async function getOfferByIsProposed({ data, updateTable }) {
  let url = "http://localhost:3000/getOfferByIsProposed";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

export async function getReviewByConductedBy({ data, updateTable }) {
  let url = "http://localhost:3000/getReviewByConductedBy";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

export async function getInterviewByPlace({ data, updateTable }) {
  let url = "http://localhost:3000/getInterviewByPlace";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

export async function getCandidates(updateTable) {
  fetch("http://localhost:3000/candidates")
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

export async function getAbstracts(updateTable) {
  fetch("http://localhost:3000/abstracts")
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

export async function getOffers(updateTable) {
  return fetch("http://localhost:3000/offers")
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

export async function getReviews(updateTable) {
  return fetch("http://localhost:3000/reviews")
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}

export async function getInterviews(updateTable) {
  return fetch("http://localhost:3000/interviews")
    .then(response => response.json())
    .then(data => updateTable(data))
    .catch(err => console.log(err));
}
