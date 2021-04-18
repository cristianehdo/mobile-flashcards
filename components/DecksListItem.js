import React from 'react'
import PropTypes from 'prop-types'
import { Pressable, StyleSheet, Text, View } from 'react-native'

const DecksListItem = ({ deck }) => {
  const { id, title, cards } = deck
  return (
    <View style={styles.container} key={id}>
      <Pressable
        onPress={() => {
          // go to deck page
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        <View style={styles.text}>
          <Text >{title}</Text>
          <Text >{cards.length} cards</Text>
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
