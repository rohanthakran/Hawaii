import React from 'react';
import {
  Image,
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {fonts} from '../Utils/fonts';
import {responsive_factor} from '../Utils/Constant';
import Colors from '../Utils/Colors';
import {images} from '../Utils/images';

const TravelGuide = () => {
  return (
    <SafeAreaView
      style={{
        marginBottom: 50,
        backgroundColor: Colors.lightBlue,
      }}>
      <Text style={styles.highlightText}>Travel Guide</Text>
      <View style={styles.TravelCard}>
        <View>
          <Text style={styles.guideNmae}>Hadwin Malone</Text>
          <Text style={styles.guideText}>Guide since 2012</Text>

          <TouchableOpacity
            style={styles.contactButton}
            onPress={() => {
              {
                Linking.openURL('tel:7011391100');
              }
            }}>
            <Text style={styles.contactText}>Contact</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image source={images.face} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TravelGuide;

const styles = StyleSheet.create({
  guideNmae: {
    fontFamily: fonts.IBMBold,
    fontSize: responsive_factor * 25,
    color: Colors.darkGreen,
  },
  guideText: {
    fontFamily: fonts.IBMRegular,
    fontSize: responsive_factor * 20,
    color: Colors.darkGreen,
  },
  highlightText: {
    fontFamily: fonts.IBMBold,
    fontSize: responsive_factor * 18,
    color: Colors.darkGreen,
    marginBottom: responsive_factor * 20,
    marginTop: responsive_factor * 30,
  },
  contactButton: {
    borderRadius: responsive_factor * 8,
    borderWidth: 2,
    paddingTop: 8,
    width: responsive_factor * 156,
    paddingBottom: 11,
    marginTop: responsive_factor * 30,
    borderColor: Colors.shadow,
  },
  contactText: {
    fontFamily: fonts.IBMBold,
    fontSize: responsive_factor * 20,
    color: Colors.shadow,
    textAlign: 'center',
  },
  TravelCard: {
    borderRadius: responsive_factor * 8,
    borderColor: Colors.shadow,
    backgroundColor: Colors.white,
    padding: responsive_factor * 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
