import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class SplashScreen extends Component {
  componentDidMount = () => {
    setTimeout(() => {
      this.props.navigation.navigate('mainFlow');
    }, 3000);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <Text>SplashScreen</Text>
      </View>
    );
  }
}

export default SplashScreen;

SplashScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
