import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
import TextButton from '../TextButton'

const Result = ({score, total, onPress}) => {
  return(
    <View style={styles.container} >
      <View>
        <Text style={styles.text}>
          Result:
        </Text>
        <Text style={styles.text}>
          You got it rigth {score} out of {total} questions.
        </Text>
      </View>
      <TextButton style={styles.button} onPress={onPress}>
        Reset Quiz
      </TextButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    margin: 5,
  },
  button: {
    fontSize: 16,
    margin: 20,
  }
})
Result.propTypes = {
  score: PropTypes.number,
  total: PropTypes.number,
  onPress: PropTypes.func,
}
export default Result
