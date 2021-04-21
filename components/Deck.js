import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { removeDeck} from '../actions'
import TextButton from './TextButton'
import { white, purple, orange } from '../utils/colors'
import { deleteDeck } from '../utils/api'

const Deck = ({ route }) => {
  const dispatch = useDispatch()
  const { deckId } = route.params
  const deck  = useSelector(state => state.decks[deckId])
  const { title, cards, id } = deck
  const navigation = useNavigation()
  const handleRemoveDeck = () => {
    dispatch(removeDeck(id))
    deleteDeck(id)
    navigation.navigate( 'Decks')
  }
  return(
    <View style={styles.container} key={id}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{cards ? cards.length : 0} cards</Text>
      </View>
      <View>
        <View style={styles.addBtnContainer}>
          <Button
            title="Add card"
            onPress={() => navigation.push('NewCard', {deckId: id})}
          />
        </View>
        <View style={styles.quizBtnContainer}>
          <Button
            title="Start quiz"
            onPress={() => navigation.push('Quiz', {deckId: id})}
          />
        </View>
      </View>
      <TextButton style={{fontSize: 16}} onPress={handleRemoveDeck}>
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
