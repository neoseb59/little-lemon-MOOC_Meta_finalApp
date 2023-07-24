import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Button from '../components/Button';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={ styles.container }>
      <View style={ styles.contentContainer }>
        <Image
          style={ styles.logo }
          source={ require("../assets/little-lemon-logo.png") }
          resizeMethod='contains'
          accessible
          accessibilityLabel={ 'Little Lemon Logo' }
        />
      </View>
      <View style={ styles.contentContainer }>
        <Text style={ styles.title }>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <View style={ styles.contentContainer } >
        <Button action={ () => navigation.navigate("Subscribe") } buttonText={ "Newsletter" } />
      </View>

    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: "contain"
  },
  title: {
    marginTop: 48,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
})