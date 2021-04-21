import { AsyncStorage } from 'react-native'

const NOTIFICATION_KEY = 'NOTIFICATION'
const DECKS_KEY = 'decks'

export const persistDeck = async ({ deck, key }) => {
  const item = await AsyncStorage.getItem(DECKS_KEY)
  try {
    if (item) {
      await AsyncStorage.mergeItem(DECKS_KEY, JSON.stringify({ [key]: deck }))
    } else {
      await AsyncStorage.setItem(DECKS_KEY, JSON.stringify({ [key]: deck }))
    }
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

export const getAll = async () => {
  const storagedDecks = await AsyncStorage.getItem(DECKS_KEY)
  return JSON.parse(storagedDecks)
}

export const updateCards = async ({key, card}) => {
  const storageDecks = await AsyncStorage.getItem(DECKS_KEY)
  const decks = JSON.parse(storageDecks)
  const deck = decks[key]
  AsyncStorage.setItem(DECKS_KEY, JSON.stringify({
    ...decks,
    [key]: {
      ...deck,
      cards: deck.cards.concat([card])
    }
  }))
}

export const getNotification = async () => {
  try {
    await AsyncStorage.getItem(NOTIFICATION_KEY)
  } catch (e) {
    console.log(e, 'error gettting notification')
  }
}

export const setNotification = async (notification) => {
  try {
    await AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(notification))
  } catch (e) {
    console.log(e, 'error on setting notification')
  }
}

export const removeNotification = async () => {
  try {
    await AsyncStorage.removeItem(NOTIFICATION_KEY)
  } catch (e) {
    console.log(e, 'error removing notification')
  }
}
