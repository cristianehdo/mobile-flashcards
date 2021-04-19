import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple } from '../utils/colors'

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: purple,
  }
})

TextButton.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: PropTypes.object,
}
