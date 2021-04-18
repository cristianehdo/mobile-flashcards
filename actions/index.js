export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'
export const ADD_CARD = 'ADD_CARD'

export const receive_decks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export const add_deck = (deck) => {
  return {
    type: ADD_DECK,
    deck,
  }
}

export const remove_deck = (deckId) => {
  return {
    type: REMOVE_DECK,
    deckId,
  }
}

export const add_card = (deckId, card) => {
  return {
    type: ADD_CARD,
    deckId,
    card,
  }
}
