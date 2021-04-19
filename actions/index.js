export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD = 'ADD_CARD'

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export const addDeck = (deck) => {
  return {
    type: ADD_DECK,
    deck,
  }
}

export const removeDeck = (deckId) => {
  return {
    type: REMOVE_DECK,
    deckId,
  }
}

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    card,
  }
}
