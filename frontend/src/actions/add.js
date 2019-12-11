import { objectToQueryString } from "../heplers";

export async function addCandidate(data) {
  let url = "http://localhost:3000/addCandidate";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function addAbstract(data) {
  let url = "http://localhost:3000/addAbstract";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function addOffer(data) {
  let url = "http://localhost:3000/addOffer";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function addReview(data) {
  let url = "http://localhost:3000/addReview";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}

export async function addInterview(data) {
  let url = "http://localhost:3000/addInterview";
  url += "?" + objectToQueryString(data);
  fetch(url)
    .then(response => response.json())
    .catch(err => console.log(err));
}
