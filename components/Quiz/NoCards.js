import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

const NoCards = ({styles}) => {
  return(
    <View style={styles.container} >
      <Text style={styles.text}>Sorry you cannot take a quiz because there are no cards in the deck</Text>
    </View>
  )
}

NoCards.propTypes = {
  styles: PropTypes.object,
}
export default NoCards
