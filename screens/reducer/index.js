
const initialState = [
  {
    key: 'CardTest',
    title: 'CardTest',
    questions: [] // [ { question: 'Mario is the best game ever?', answer: 'YESS!!!', isCorrect: true } ]
  }
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
}
