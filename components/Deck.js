import React from 'react'
import { useDispatch } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { removeDeck} from '../actions'
import TextButton from './TextButton'
import { white, purple, orange } from '../utils/colors'

const Deck = ({ route }) => {
  const dispatch = useDispatch()
  const { deck } = route.params
  const { title, cards, id } = deck
  return(
    <View style={styles.container} key={id}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{cards.length} cards</Text>
      </View>
      <View>
        <View style={styles.addBtnContainer}>
          <Button
            title="Add card"
            onPress={() => console.log('go to add card')}
          />
        </View>
        <View style={styles.quizBtnContainer}>
          <Button
            title="Start quiz"
            disabled={cards.length === 0}
            onPress={() => console.log('start quiz')}
          />
        </View>
      </View>
      <TextButton style={{fontSize: 16}} onPress={dispatch(removeDeck(id))}>
        Remove Deck
      </TextButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 80,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
  },
  addBtnContainer: {
    backgroundColor: purple,
    marginTop: 12,
    color: white,
    borderRadius: 8
  },
  quizBtnContainer: {
    backgroundColor: orange,
    marginTop: 12,
    color: white,
    borderRadius: 8
  }
})

Deck.propTypes = {
  route: PropTypes.object,
}
export default Deck
