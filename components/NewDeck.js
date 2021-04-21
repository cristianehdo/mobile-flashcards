import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard
} from 'react-native'
import { addDeck } from '../actions'
import { generateId } from '../utils/helpers'
import { black, purple, orange } from '../utils/colors'
import { persistDeck } from '../utils/api'


const NewDeck = () => {
  const [title, setTitle] = useState(null)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const handleAddDeck = (e) => {
    e.preventDefault()
    const key = generateId()
    const deck = { title: title, id: key, cards: [] }
    dispatch(addDeck(deck))
    persistDeck({key, deck})
    setTitle('')
  }
  const existingTitle  = useSelector(state => {
    return Object.keys(state.decks).find((id) => state.decks[id].title === title)
  })
  useEffect(()=> {
    setError(!!existingTitle)
  }, [title, existingTitle])
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>What is the title of your new Deck?</Text>
          <View>
            <TextInput
              value={title}
              placeholder="Title"
              onChangeText={setTitle}
              style={styles.textInput} />
            {error? <Text style={styles.helper}>Title already exists</Text> : null}
          </View>
          <View style={styles.btnContainer}>
            <Button
              title="Add Deck"
              disabled={!title || error}
              onPress={handleAddDeck} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around'
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: black,
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: purple,
    marginTop: 12
  },
  helper: {
    fontSize: 12,
    color: orange
  }
})

export default NewDeck
