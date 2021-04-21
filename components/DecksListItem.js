import React from 'react'
import PropTypes from 'prop-types'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { gray, purple } from '../utils/colors'

const DecksListItem = ({ deck }) => {
  const { id, title, cards } = deck
  const navigation = useNavigation()
  return (
    <View style={styles.container} key={id}>
      <Pressable
        onPress={() => {
          navigation.navigate(
            'Deck',
            { deck: deck }
          )
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? purple
              : gray
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
    padding: 6
  },
})

DecksListItem.propTypes = {
  deck: PropTypes.object,
}

export default DecksListItem
