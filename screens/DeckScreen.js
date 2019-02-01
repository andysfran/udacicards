import React, { PureComponent } from 'react';
import { StyleSheet, Text, Alert } from 'react-native';
import { connect } from 'react-redux';

import DefaultContainer from '../components/DefaultContainer';
import CommonButton from '../components/CommonButton';

class DetailsScreen extends PureComponent {

  static navigationOptions = {
    title: 'Deck details',
    headerStyle: {
      backgroundColor: '#437db2',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  getSelectedDeck = () => {
    const { list, navigation: { state: { params } } } = this.props;
    return list[params.idDeck];
  }

  newQuestion = () => {
    const { navigation: { state: { params } } } = this.props;
    this.props.navigation.push('NewQuestion', {
      idDeck: params.idDeck
    });
  }

  startQuiz = () => {
    const deck = this.getSelectedDeck();
    if (deck.questions.length > 0) {
      const { navigation: { state: { params } } } = this.props;
      this.props.navigation.push('Quiz', {
        idDeck: params.idDeck
      });
    } else {
      Alert.alert("Hey!", "This quiz is empty. Try to add a new question.");
    }
  }

  render() {
    const deck = this.getSelectedDeck();
    return(
      <DefaultContainer customstyle={styles.container}>
        <Text style={styles.titleDeck}>{deck.title}</Text>
        <Text style={styles.subtitleDeck}>Questions: {deck.questions.length}</Text>

        <CommonButton filled={true} onPress={this.startQuiz}>Start Quiz</CommonButton>
        <CommonButton onPress={this.newQuestion}>Create new question</CommonButton>
      </DefaultContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.decksReducer
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#6f92b2"
  },
  titleDeck: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff'
  },
  subtitleDeck: {
    fontSize: 20,
    fontWeight: "300",
    color: '#e1e6f2',
    marginBottom: 15
  }
});

export default connect(mapStateToProps, null)(DetailsScreen);
