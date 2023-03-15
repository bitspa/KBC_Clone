const data = [
  {
    id: 1,
    question: "'OS' computer abbreviation usually means ?",
    answers: [
      {
        text:"Order of Significance",
        correct: false,
      },
      {
        text: "Operating System",
        correct: true,
      },
      {
        text: "Open Software",
        correct: false,
      },
      {
        text: "Optical Sensor",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "Plants receive their nutrients mainly from",
    answers: [
      {
        text: "chlorophyll",
        correct: false,
      },
      {
        text: "atmosphere",
        correct: false,
      },
      {
        text: "soil",
        correct: true,
      },
      {
        text: "light",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "Which movie won four Hollywood Critics Association Film Awards 2023?",
    answers: [
      {
        text: "RRR",
        correct: true,
      },
      {
        text: "Ram Setu",
        correct: false,
      },
      {
        text: "Salute",
        correct: false,
      },
      {
        text: "The Victory Wolf",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "What is the theme of the World Press Freedom Day 2021",
    answers: [
      {
        text: "Journalism without Fear or Favour",
        correct: false,
      },
      {
        text: "Media for Democracy, Journalism and Elections in Times of Disinformation",
        correct: false,
      },
      {
        text: "Information as a Public Good",
        correct: true,
      },
      {
        text: "Keeping Power in Check: Media, Justice and The Rule of Law",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "The 3rd edition of Global Fintech Fest being organized in which city",
    answers: [
      {
        text: "Mumbai",
        correct: true,
      },
      {
        text: "Patna",
        correct: false,
      },
      {
        text: "Hyderabad",
        correct: false,
      },
      {
        text: "Jaipur",
        correct: false,
      },
    ],
  },
  {
    id: 6,
    question: "In which of these two sports is the term ‘free hit’ used?",
    answers: [
      {
        text: "Football, Squash",
        correct: false,
      },
      {
        text: "Badminton, Tennis",
        correct: false,
      },
      {
        text: "Badminton, Cricket",
        correct: false,
      },
      {
        text: "Hockey, Cricket",
        correct: true,
      },
    ],
  },
  {
    id: 7,
    question: "Which is the second most spoken language of Nepal?",
    answers: [
      {
        text: "Bajjika",
        correct: false,
      },
      {
        text: "Nepali",
        correct: false,
      },
      {
        text: "Maithili",
        correct: true,
      },
      {
        text: "Bhojpuri",
        correct: false,
      },
    ],
  },
  {
    id: 8,
    question:
      "Which battle in 1757 marked the beginning of British occupation in India?",
    answers: [
      {
        text: "Plassey",
        correct: true,
      },
      {
        text: "Assaye",
        correct: false,
      },
      {
        text: "Buxar",
        correct: false,
      },
      {
        text: "Cuddalore",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question: "Which of these spices is the smallest in size?",
    answers: [
      {
        text: "Ajwain",
        correct: true,
      },
      {
        text: "Jeera",
        correct: false,
      },
      {
        text: "Saunf",
        correct: false,
      },
      {
        text: "Methi Seeds",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question: "Where was the BRICS summit held in 2014?",
    answers: [
      {
        text: "Brazil",
        correct: true,
      },
      {
        text: "India",
        correct: false,
      },
      {
        text: "Russia",
        correct: false,
      },
      {
        text: "China",
        correct: false,
      },
    ],
  },
  {
    id: 11,
    question: "The ratio of width of our National flag to its length is",
    answers: [
      {
        text: "2:3",
        correct: true,
      },
      {
        text: "3:5",
        correct: false,
      },
      {
        text: "5:3",
        correct: false,
      },
      {
        text: "3:2",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question: "'Dandia' is a popular dance of",
    answers: [
      {
        text: "Punjab",
        correct: false,
      },
      {
        text: "Gujarat",
        correct: true,
      },
      {
        text: "Maharashtra",
        correct: false,
      },
      {
        text: "Tamil Nadu",
        correct: false,
      },
    ],
  },
  {
    id: 13,
    question: "'Natya - Shastra' the main source of India's classical dances was written by",
    answers: [
      {
        text: "Nara Muni",
        correct: false,
      },
      {
        text: "Abhinav Gupt",
        correct: false,
      },
      {
        text: "Bharat Muni",
        correct: true,
      },
      {
        text: "Tandu Muni",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: ".MOV' extension refers usually to what kind of file?",
    answers: [
      {
        text: "Animation/movie file",
        correct: true,
      },
      {
        text: "Image file",
        correct: false,
      },
      {
        text: "Audio file",
        correct: false,
      },
      {
        text: "MS Office document",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question: "In which decade with the first transatlantic radio broadcast occur?",
    answers: [
      {
        text: "1850s",
        correct: false,
      },
      {
        text: "1900s",
        correct: true,
      },
      {
        text: "1800s",
        correct: false,
      },
      {
        text: "2000s",
        correct: false,
      },
    ],
  },
];

const prizeMoney = [
  { id: 1, amount: "₹ 5000" },
  { id: 2, amount: "₹ 15000" },
  { id: 3, amount: "₹ 30000" },
  { id: 4, amount: "₹ 60000" },
  { id: 5, amount: "₹ 100000" },
  { id: 6, amount: "₹ 150000" },
  { id: 7, amount: "₹ 250000" },
  { id: 8, amount: "₹ 400000" },
  { id: 9, amount: "₹ 600000" },
  { id: 10, amount:"₹ 1000000" },
  { id: 11, amount:"₹ 3000000" },
  { id: 12, amount:"₹ 5000000" },
  { id: 13, amount:"₹ 7000000" },
  { id: 14, amount:"₹ 9000000" },
  { id: 15, amount:"₹ 1000000" },
].reverse();

export { prizeMoney, data };
