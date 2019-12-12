import { objectToQueryString } from "../heplers";

export async function addCandidate({ data, update }) {
  let url = "http://localhost:3000/addCandidate";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(update('Candidates'))
    .catch(err => console.log(err));
}

export async function addAbstract({ data, update }) {
  let url = "http://localhost:3000/addAbstract";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(update('Abstracts'))
    .catch(err => console.log(err));
}

export async function addOffer({ data, update }) {
  let url = "http://localhost:3000/addOffer";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(update('Offers'))
    .catch(err => console.log(err));
}

export async function addReview({ data, update }) {
  let url = "http://localhost:3000/addReview";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(update('Reviews'))
    .catch(err => console.log(err));
}

export async function addInterview({data, update}) {
  let url = "http://localhost:3000/addInterview";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .then(update('Interviews'))
    .catch(err => console.log(err));
}
