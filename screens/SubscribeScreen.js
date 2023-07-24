import * as React from 'react';
import { View, StyleSheet, Image, TextInput, KeyboardAvoidingView, ScrollView, Text, Alert } from 'react-native';
import Button from '../components/Button';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, onChangeEmail] = React.useState('');
  const isValidEmail = validateEmail(email);

  return (
    <ScrollView keyboardDismissMode='on-drag'>
      <View style={ styles.contentContainer }>
        <Image style={ styles.image } source={ require("../assets/little-lemon-logo-grey.png") } accessible accessibilityHint='Little Lemon grey logo' />
      </View>
      <View style={ styles.contentContainer }>
        <Text style={ styles.text }>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
      </View>
      <KeyboardAvoidingView style={ styles.contentContainer } behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }>
        <TextInput style={ styles.textInput } value={ email } onChangeText={ onChangeEmail } placeholder='Type your email' keyboardType='email-address' />
      </KeyboardAvoidingView>
      <View style={ styles.contentContainer }>
        <Button action={ () => Alert.alert("Thank you for subscribing, stay tuned!") } buttonText={ "Subscribe" } disabled={ !isValidEmail } />
      </View>
    </ScrollView>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  image: {
    height: 150,
    width: 250,
    resizeMode: "contain"
  },
  text: {
    marginHorizontal: 10,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
  },
  textInput: {
    width: "88%",
    borderRadius: 5,
    margin: 20,
    padding: 20,
    borderRadius: 5,
    borderColor: '#40534d',
    borderWidth: 2,
    borderStyle: "solid"
  }
})