import {
  RECEIVE_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD} from '../actions'

const decks = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_DECKS :
    return {
      ...state,
      ...action.decks,
    }
  case ADD_DECK :
    return {
      ...state,
      [action.deck.id]: {
        ...action.deck,
        cards: []
      },
    }
  case REMOVE_DECK: {
    const decksObj = { ...state }
    delete decksObj[action.deckId]
    return decksObj
  }
  case ADD_CARD :
    return {
      ...state,
      [action.deckId]: {
        ...action.decks[action.deckId],
        ...action.deck.cards.concat([action.card])
      },
    }
  default :
    return state
  }
}

export default decks
