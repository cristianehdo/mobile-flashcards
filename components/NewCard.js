import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard
} from 'react-native'
import { addCard } from '../actions'
import { generateId } from '../utils/helpers'
import { black, purple } from '../utils/colors'

const NewCard = ({ route }) => {
  const { deckId } = route.params
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const dispatch = useDispatch()
  const handleAddCard = (e) => {
    e.preventDefault()
    dispatch(addCard({
      question: question,
      answer: answer,
      deckId: deckId,
      id: generateId()
    }))
    setQuestion('')
    setAnswer('')
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <TextInput
            value={question}
            placeholder="Question"
            onChangeText={setQuestion}
            style={styles.textInput} />
          <TextInput
            value={answer}
            placeholder="Answer"
            onChangeText={setAnswer}
            style={styles.textInput} />
          <View style={styles.btnContainer}>
            <Button
              title="Add Card"
              disabled={!answer || !question}
              onPress={handleAddCard} />
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

NewCard.propTypes = {
  route: PropTypes.object,
}
export default NewCard
