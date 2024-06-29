import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import {responsive_factor} from '../Utils/Constant';
import {images} from '../Utils/images';
import Colors from '../Utils/Colors';
import {fonts} from '../Utils/fonts';
import Surffing from '../Screens/Surffing';
import Hula from '../Screens/Hula';
import Vulcano from '../Screens/Vulcano';

const Tab = createBottomTabNavigator();

const BottomTab = ({route}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: responsive_factor * 70,
          margin: 0,
          padding: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,

          tabBarIcon: ({focused, color, size, activeTintColor}) =>
            focused ? (
              <View style={styles?.activeContainer}>
                <Image source={images?.activeHome} />

                <Text style={styles?.activeText}>Home</Text>
                <View style={styles.activeTabBorder} />
              </View>
            ) : (
              <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Image source={images?.home} />

                <Text style={styles?.nonActiveText}>Home</Text>
                <View style={[styles.activeTabBorder, {display: 'none'}]} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Surffing"
        component={Surffing}
        options={{
          headerShown: false,
          // tabBarLabel: null,
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size, activeTintColor}) =>
            focused ? (
              <View style={styles?.activeContainer}>
                <Image source={images?.activesurffing} />

                <Text style={styles?.activeText}>Surfing</Text>
                <View style={styles.activeTabBorder} />
              </View>
            ) : (
              <View style={styles?.activeContainer}>
                <Image source={images?.surffing} />

                <Text style={styles?.nonActiveText}>Surfing</Text>
                <View style={[styles.activeTabBorder, {display: 'none'}]} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Hula"
        component={Hula}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size, activeTintColor}) =>
            focused ? (
              <View style={styles?.activeContainer}>
                <Image source={images?.nightLife} />

                <Text style={styles?.activeText}>Hula</Text>
                <View style={styles.activeTabBorder} />
              </View>
            ) : (
              <View style={styles?.activeContainer}>
                <Image source={images?.nightLife} />

                <Text style={styles?.nonActiveText}>Hula</Text>
                <View style={[styles.activeTabBorder, {display: 'none'}]} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Volcano"
        component={Vulcano}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size, activeTintColor}) =>
            focused ? (
              <View style={styles?.activeContainer}>
                <Image source={images?.volcanonav} />

                <Text style={styles?.activeText}>Vulcano</Text>
                <View style={styles.activeTabBorder} />
              </View>
            ) : (
              <View style={styles?.activeContainer}>
                <Image source={images?.volcanonav} />

                <Text style={styles?.nonActiveText}>Vulcano</Text>
                <View style={[styles.activeTabBorder, {display: 'none'}]} />
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  activeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'space-between',

    // borderBottomWidth: 5,
    // borderColor: Colors?.shadow,
    // width: '100%',
    // marginBottom: responsive_factor * -7,
    // paddingBottom: 10,
  },
  activeTabBorder: {
    position: 'absolute',
    bottom: responsive_factor * -11,
    width: '100%',
    height: 5,
    backgroundColor: Colors?.shadow,
  },
  activeText: {
    color: Colors.shadow,
    fontFamily: fonts.robotMedium,
    fontSize: 14,
    marginTop: responsive_factor * 5,
    // marginBottom: responsive_factor * 11,
  },
  nonActiveText: {
    color: Colors.darkGreen,
    fontFamily: fonts?.robotMedium,
    fontSize: 14,
    marginTop: responsive_factor * 5,
  },
});
