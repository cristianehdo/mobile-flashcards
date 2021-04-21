import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import TextButton from './TextButton'

const Result = ({styles, score, total, onPress}) => {
  return(
    <View style={styles.container} >
      <View>
        <Text style={styles.text}>
          You got it rigth {score} out of {total} questions.
        </Text>
      </View>
      <TextButton style={{fontSize: 16}} onPress={onPress}>
        Reset Quiz
      </TextButton>
    </View>
  )
}

Result.propTypes = {
  styles: PropTypes.object,
  score: PropTypes.number,
  total: PropTypes.number,
  onPress: PropTypes.fun,
}
export default Result
