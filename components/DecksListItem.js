import React from 'react'
import PropTypes from 'prop-types'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { white, grey } from '../utils/colors'

const DecksListItem = ({ deck }) => {
  const { id, title, cards } = deck
  const navigation = useNavigation()
  return (
    <View style={styles.container} key={id}>
      <Pressable
        onPress={() => {
          navigation.navigate(
            'Deck',
            { deckId: id }
          )
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? grey
              : white
          },
          styles.wrapperCustom
        ]}>
        <View style={styles.text}>
          <Text >{title}</Text>
          <Text >{cards ? cards.length : 0} cards</Text>
        </View>
      </Pressable>
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
  wrapperCustom: {
    borderRadius: 8,
    borderColor: grey,
    borderWidth: 1,
    padding: 30,
  },
})

DecksListItem.propTypes = {
  deck: PropTypes.object,
}

export default DecksListItem
