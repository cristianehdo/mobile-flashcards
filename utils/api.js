import { AsyncStorage } from 'react-native'

export const persistDeck = async ({ deck, key }) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify({
      [key]: deck
    }))
  } catch (e) {
    console.log(e, 'error on setItem')
  }
}

export const deleteDeck = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log(e, 'error on removeItem')
  }
}

const getAllKeys = async () => {
  return await AsyncStorage.getAllKeys()
}

export const getAll = async () => {
  const keys = await getAllKeys()
  const storagedDecks = await AsyncStorage.multiGet(keys)
  const decks = {}
  storagedDecks.map((deck) => {
    Object.assign(decks, JSON.parse(deck[1]))
  })
  return decks
}

export const updateCards = async ({key, card}) => {
  const item = await AsyncStorage.getItem(key)
  const deck = Object.assign(JSON.parse(item))
  deck[key].cards = deck[key].cards.concat([card])
  AsyncStorage.setItem(key, JSON.stringify(deck))
}
