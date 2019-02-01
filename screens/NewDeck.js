import React, { PureComponent } from 'react'
import { StyleSheet, Alert } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addDeck } from './actions'

import DefaultContainer from '../components/DefaultContainer'
import CommonButton from '../components/CommonButton'
import CommonField from '../components/CommonField'

class NewDeck extends PureComponent {

  static navigationOptions = {
    title: 'New Deck',
    headerStyle: {
      backgroundColor: '#437db2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  state = {
    name: '',
  }

  addDeck = () => {
    const { name } = this.state
    if (name.trim() !== "") {
      this.props.addDeck(name)
      Alert.alert('Wee!', 'Successfully added!', [{text: 'Go back', onPress: () => this.props.navigation.goBack()}])
    } else {
      Alert.alert('Hey!', 'You cannot create a deck with empty name!');
    }
  }

  render() {
    return (
      <DefaultContainer customstyle={styles.container}>
        <CommonField
          label="Deck name:"
          value={this.state.name}
          onChangeText={(text) => this.setState({ name: text })}
        />

        <CommonButton filled={true} onPress={this.addDeck}>Add deck</CommonButton>
      </DefaultContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6f92b2",
    alignItems: 'center'
  },
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ addDeck }, dispatch);

export default connect(null, mapDispatchToProps)(NewDeck);
