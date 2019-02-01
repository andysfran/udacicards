import React, { PureComponent } from 'react'
import { StyleSheet, Alert } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addQuestion } from './actions'

import DefaultContainer from '../components/DefaultContainer'
import CommonButton from '../components/CommonButton'
import CommonField from '../components/CommonField'

class NewQuestion extends PureComponent {

  static navigationOptions = {
    title: 'New question',
    headerStyle: {
      backgroundColor: '#437db2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  state = {
    question: '',
    answer: ''
  }

  addDeck = () => {
    const { question, answer } = this.state
    const { navigation: { state: { params } } } = this.props
    if (question.trim() !== "" || answer.trim() !== "") {
      this.props.addQuestion(params.idDeck, question, answer)
      Alert.alert('Wee!', 'Successfully added!', [{text: 'Go back', onPress: () => this.props.navigation.goBack()}])
    } else {
      Alert.alert('Hey!', 'You cannot add a new question with empty question and/or answer!');
    }
  }

  render() {
    console.log(this.props)
    return (
      <DefaultContainer customstyle={styles.container}>
        <CommonField
          label="Question:"
          value={this.state.question}
          onChangeText={(text) => this.setState({ question: text })}
        />
        <CommonField
          label="Answer:"
          value={this.state.answer}
          onChangeText={(text) => this.setState({ answer: text })}
        />

        <CommonButton filled={true} onPress={this.addDeck}>Add question</CommonButton>
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

const mapDispatchToProps = (dispatch) => bindActionCreators({ addQuestion }, dispatch);

export default connect(null, mapDispatchToProps)(NewQuestion);
