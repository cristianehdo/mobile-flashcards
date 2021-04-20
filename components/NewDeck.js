import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
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
import { black, purple } from '../utils/colors'
import { persistDeck } from '../utils/api'


const NewDeck = () => {
  const [title, setTitle] = useState(null)
  const dispatch = useDispatch()
  const handleAddDeck = (e) => {
    e.preventDefault()
    const key = generateId()
    const deck = { title: title, id: key, cards: [] }
    dispatch(addDeck(deck))
    persistDeck({key, deck})
    setTitle('')
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>What is the title of your new Deck?</Text>
          <TextInput
            value={title}
            placeholder="Title"
            onChangeText={setTitle}
            style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button
              title="Add Deck"
              disabled={!title}
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
  }
})

export default NewDeck
