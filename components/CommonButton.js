import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default (props) => (
  <TouchableOpacity onPress={props.onPress} style={props.filled? styles.filledContainer : styles.container}>
    <Text style={styles.titleButton}>{props.children}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  filledContainer: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    backgroundColor: 'transparent'
  },
  container: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    backgroundColor: '#0d6996',
    marginVertical: 5
  },
  titleButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fff',
  }
})
