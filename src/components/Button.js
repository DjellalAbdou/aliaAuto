import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';

const Button = ({text}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.$baseOrange,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    width: '68%',
  },
  buttonText: {
    color: Colors.$white,
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
});

export default Button;
