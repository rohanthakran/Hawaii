import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {images} from '../Utils/images';
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomTab');
    }, 1500);
  }, []);
  return (
    <SafeAreaView style={styles?.conatiner}>
      <Image source={images.splash} />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
});
