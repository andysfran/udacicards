
export const addDeck = (state, payload) => ([
  ...state,
  {
    key: Date.now().toString(),
    title: payload,
    questions: []
  }
]);

export const addQuestion = (state, payload) => {
  let newList = [ ...state ]; // searching for the deck
  newList[payload.deckIndex].questions.push({
    question: payload.question,
    answer: payload.answer
  }); // add the new question in the deck array

  return [
    ...newList
  ];
}
