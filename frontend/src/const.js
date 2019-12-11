export const candidateInputs = [
  { label: "Surname", field: "surname" },
  { label: "Name", field: "name" },
  { label: "Patronymic", field: "patronymic" },
  { label: "Skill", field: "skill" },
  { label: "Source", field: "source" },
  { label: "Status", field: "status" }
];

export const abstractInputs = [
  { label: "Desired Salary", field: "salary" },
  { label: "English Level", field: "english" },
  { label: "Hours Per Week", field: "hours" }
];

export const offerInputs = [
  { label: "Is Proposed", field: "isProposed" },
  { label: "Is Adopted", field: "isAdopted" }
];

export const reviewInputs = [
  { label: "Conducted By", field: "conductedBy" },
  { label: "Comments", field: "comments" }
];

export const interviewInputs = [
  { label: "Candidate Id", field: "candidateId" },
  { label: "Abstract Id", field: "abstractId" },
  { label: "Review Id", field: "reviewId" },
  { label: "Offer Id", field: "offerId" },
  { label: "Date", field: "date" },
  { label: "Place", field: "place" },
  { label: "Delivery Director", field: "dd" }
];

export const headers = {
  Candidates: [
    { id: 1, title: "ID" },
    { id: 2, title: "Surname" },
    { id: 3, title: "Name" },
    { id: 4, title: "Patronymic" },
    { id: 5, title: "Skill" },
    { id: 6, title: "Source" },
    { id: 7, title: "Status" },
    { id: 8, title: "Action" }
  ],
  Abstracts: [
    { id: 1, title: "ID" },
    { id: 2, title: "Desired Salary" },
    { id: 3, title: "English Level" },
    { id: 4, title: "Hours Per Week" },
    { id: 5, title: "Action" }
  ],
  Offers: [
    { id: 1, title: "ID" },
    { id: 2, title: "Is Proposed" },
    { id: 3, title: "Is Adopted" },
    { id: 4, title: "Action" }
  ],
  Reviews: [
    { id: 1, title: "ID" },
    { id: 2, title: "Conducted By" },
    { id: 3, title: "Comments" },
    { id: 4, title: "Action" }
  ],
  Interviews: [
    { id: 1, title: "ID" },
    { id: 2, title: "Candidate ID" },
    { id: 3, title: "Abstract ID" },
    { id: 4, title: "Review ID" },
    { id: 5, title: "Offer ID" },
    { id: 6, title: "Date" },
    { id: 7, title: "Place" },
    { id: 8, title: "D. Director" },
    { id: 9, title: "Action" }
  ]
};
