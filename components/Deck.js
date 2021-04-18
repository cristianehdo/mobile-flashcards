import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { removeDeck} from '../actions'
import { StyleSheet, Text, View, Button, TextButton } from 'react-native'

const Deck = ({ deck }) => {
  const dispatch = useDispatch()
  const { title, cards, id } = deck
  return(
    <View style={styles.container} key={id}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{cards.length} cards</Text>
      <Button
        title="Add card"
        onPress={() => console.log('go to add card')}
      />
      <Button
        title="Start quiz"
        disabled={cards.length === 0}
        onPress={() => console.log('start quiz')}
      />
      <TextButton style={{padding: 10}} onPress={dispatch(removeDeck(deck.id))}>
        Remove Deck
      </TextButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16
  },
})

Deck.propTypes = {
  deck: PropTypes.object,
}
export default Deck
