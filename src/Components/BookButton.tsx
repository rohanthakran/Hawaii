import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {responsive_factor} from '../Utils/Constant';
import {fonts} from '../Utils/fonts';
import Colors from '../Utils/Colors';

const BookButton = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          marginHorizontal: 10,
          //   marginBottom: 15,
        }}>
        <TouchableOpacity style={styles?.BookButton}>
          <Text style={styles?.bookText}>Book a trip</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BookButton;

const styles = StyleSheet.create({
  BookButton: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    backgroundColor: Colors.shadow,
    shadowColor: Colors?.shadowtwo,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 4,
    borderRadius: responsive_factor * 8,
  },
  bookText: {
    fontFamily: fonts?.IBMBold,
    fontSize: 20,
    color: Colors?.white,
    textAlign: 'center',
    paddingVertical: 8,
  },
});
