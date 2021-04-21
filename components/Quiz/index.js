import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Button } from 'react-native'
import { white, purple, orange } from '../../utils/colors'
import TextButton from '../TextButton'
import NoCards from './NoCards'
import Result from './Result'

class Quiz extends Component {
  state = {
    cards: this.props.deck.cards,
    cardsToAnswer: this.props.deck.cards,
    corrects: 0,
    incorrects: 0,
    showQuestion : true,
  }
  toggleQuestionAnswer = () => {
    this.setState((state) => {
      return {showQuestion: !state.showQuestion}
    })
  }
  handleAnswerQuestion = (id, answer) => {
    this.setState((state) => {
      const cardsToAnswer = this.state.cardsToAnswer.filter((card) => card.id !== id)
      return {
        cardsToAnswer,
        [answer]: state[answer] + 1
      }
    })
  }
  fetchCard = () => {
    if (this.state.cardsToAnswer.length === []) {
      return undefined
    }
    const index = Math.floor(Math.random() * this.state.cardsToAnswer.length)
    return this.state.cardsToAnswer[index]
  }
  resetQuiz = () => {
    this.setState({
      cardsToAnswer: this.props.deck.cards,
      corrects: 0,
      incorrects: 0,
      showQuestion : true,
    })
  }
  render () {
    const { cards, corrects, incorrects, showQuestion } = this.state
    if (cards.length === 0) {
      return <NoCards styles={styles} />
    }
    const card = this.fetchCard()
    if (typeof card == 'undefined') {
      return (
        <Result
          score={corrects}
          total={corrects + incorrects}
          styles={styles}
          onPress={this.resetQuiz} />
      )
    }
    return (
      <View style={styles.container} >
        <Text style={styles.text}>{corrects + incorrects}/{cards.length}</Text>
        <View>
          <Text style={styles.title}>{showQuestion ? card.question : card.answer}</Text>
          <TextButton style={{fontSize: 16}} onPress={this.toggleQuestionAnswer}>
            {showQuestion ? 'Answer' : 'Question'}
          </TextButton>
        </View>
        <View>
          <View style={styles.correctBtnContainer}>
            <Button
              title="Correct"
              onPress={() => this.handleAnswerQuestion(card.id, 'corrects')}
            />
          </View>
          <View style={styles.incorrectBtnContainer}>
            <Button
              title="Incorrect"
              onPress={() => this.handleAnswerQuestion(card.id, 'incorrects')}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
  },
  title: {
    fontSize: 24,
  },
  correctBtnContainer: {
    backgroundColor: purple,
    paddingLeft: 50,
    paddingRight: 50,
    color: white,
    borderRadius: 8
  },
  incorrectBtnContainer: {
    backgroundColor: orange,
    marginTop: 12,
    paddingLeft: 50,
    paddingRight: 50,
    color: white,
    borderRadius: 8
  }
})
const mapStateToProps = ({ decks }, { route, navigation }) => {
  const { deckId } = route.params
  return {
    deck: decks[deckId],
    navigation,
  }
}

Quiz.propTypes = {
  deck: PropTypes.object,
  navigation: PropTypes.object,
}
export default connect(mapStateToProps)(Quiz)
