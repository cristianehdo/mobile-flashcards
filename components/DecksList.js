import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { FlatList, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import DecksListItem from './DecksListItem'

class DecksList extends Component {
  renderItem = ({ item }) => (
    <DecksListItem deck={item}/>
  )
  render () {
    const { decks } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={decks}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
})
DecksList.propTypes = {
  decks: PropTypes.array
}

const mapStateToProps = ({ decks }) => {
  const deckIds = Object.keys(decks)
  return {
    decks: deckIds.map((id) => decks[id]),
  }
}
export default connect(mapStateToProps)(DecksList)
