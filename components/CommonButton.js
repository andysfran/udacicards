import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default (props) => (
  <TouchableOpacity onPress={props.onPress} style={props.filled? styles.filledContainer : styles.container} disabled={props.disabled}>
    <Text style={styles.titleButton}>{props.children}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  filledContainer: {
    width: '60%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    backgroundColor: '#0d6996',
    marginVertical: 5,
    padding: 5
  },
  container: {
    width: '60%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    backgroundColor: 'transparent',
    padding: 5
  },
  titleButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#fff',
  }
})
