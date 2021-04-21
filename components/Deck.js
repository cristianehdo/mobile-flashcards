import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'
import PropTypes from 'prop-types'
import { removeDeck} from '../actions'
import TextButton from './TextButton'
import { white, purple, orange } from '../utils/colors'
import { deleteDeck } from '../utils/api'

class Deck extends Component {
  handleRemoveDeck = () => {
    const { deck } = this.props
    this.props.dispatch(removeDeck(deck.id))
    deleteDeck(deck.id)
    this.props.navigation.goBack()
  }
  shouldComponentUpdate (nextProps) {
    return nextProps.deck
  }
  render () {
    const { deck } = this.props
    const { title, cards, id } = deck
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
      <TextButton style={{fontSize: 16}} onPress={this.handleRemoveDeck}>
        Remove Deck
      </TextButton>
      </View>
    )
  }
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
const mapStateToProps = ({ decks }, { route }) => {
  const { deckId } = route.params
  return {
    deck: decks[deckId] || null
  }
}
export default connect(mapStateToProps)(Deck)
