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


const NewDeck = () => {
  const [title, setTitle] = useState(null)
  const dispatch = useDispatch()
  const handleAddDeck = (e) => {
    e.preventDefault()
    dispatch(addDeck({ title: title, id: generateId() }))
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
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12
  }
})

export default NewDeck
