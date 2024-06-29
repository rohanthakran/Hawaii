import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../Utils/fonts';
import Colors from '../Utils/Colors';
import {responsive_factor} from '../Utils/Constant';

const Header = () => {
  return (
    <SafeAreaView style={styles?.container}>
      <Text style={styles?.headingText}>Aloha</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  headingText: {
    fontFamily: fonts.PlayItaly,
    fontSize: responsive_factor * 25,
    color: Colors.darkGreen,
    textAlign: 'center',
    padding: 15,
  },
});
