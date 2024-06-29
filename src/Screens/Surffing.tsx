import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../Utils/Colors';
import {data, responsive_factor, Sports} from '../Utils/Constant';
import {fonts} from '../Utils/fonts';
import BookButton from '../Components/BookButton';
import TravelGuide from '../Components/TravelGuide';
import Header from '../Components/Header';
import {images} from '../Utils/images';

type ItemProps = {item: any};

const Item = ({item}: ItemProps) => (
  <View
    style={{
      marginRight: 10,
    }}>
    <View style={styles?.card}>
      <View
        style={{
          paddingLeft: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles?.cardText}>{item?.id}. </Text>

        <Text style={styles?.cardText}>{item?.title}</Text>
      </View>
      <Image style={styles?.listImage} source={images?.spotImage} />
    </View>
  </View>
);
const Surffing = ({navigation, route}) => {
  const [details, setDetails] = useState(route?.params?.item);

  return (
    <SafeAreaView style={styles?.container}>
      <ScrollView>
        <Header />
        <ImageBackground
          source={details?.image ? details?.image : data[0]?.image}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.text}>
            {details?.title ? details?.title : data[0]?.title}
          </Text>
        </ImageBackground>
        <View style={styles?.subContainer}>
          <Text style={styles?.description}>
            {details?.des ? details?.des : data[0]?.des}
          </Text>
        </View>
        {/* =============== Higlights place to visit */}
        <View style={styles?.subContainer}>
          <Text style={styles?.highlightText}>Top spots</Text>
          <FlatList
            data={Sports}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles?.secondContainer}>
          <TravelGuide />
        </View>
      </ScrollView>
      <BookButton />
    </SafeAreaView>
  );
};

export default Surffing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    // flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: responsive_factor * 240,
  },
  text: {
    color: Colors?.white,
    fontSize: responsive_factor * 56,
    lineHeight: 56,
    fontFamily: fonts.IBMBold,
    textAlign: 'center',
    opacity: 0.8,
  },
  description: {
    fontFamily: fonts?.IBMRegular,
    fontSize: 20,
    color: Colors?.darkGreen,
  },
  subContainer: {
    padding: responsive_factor * 16,
    marginTop: responsive_factor * 22,
  },
  highlightText: {
    fontFamily: fonts.IBMBold,
    fontSize: responsive_factor * 18,
    color: Colors?.darkGreen,
    marginBottom: responsive_factor * 20,
    marginTop: responsive_factor * 30,
  },
  card: {
    width: '100%',
    backgroundColor: Colors.white,
    shadowColor: Colors?.shadow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 4,
    borderRadius: responsive_factor * 4,
    overflow: 'hidden',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secCard: {
    backgroundColor: Colors.white,
    borderRadius: responsive_factor * 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
  },
  listImage: {
    // height: responsive_factor * 170,
    // width: '100%',
    // resizeMode: 'cover',
  },
  cardText: {
    fontFamily: fonts.IBMBold,
    color: Colors?.shadow,
    fontSize: responsive_factor * 20,
  },
  listText: {
    fontFamily: fonts.IBMRegular,
    color: Colors?.darkGreen,
    fontSize: responsive_factor * 20,
  },
  cardSubText: {
    fontFamily: fonts.IBMSemi,
    color: Colors?.darkGreen,
    fontSize: responsive_factor * 20,
  },
  secondContainer: {
    backgroundColor: Colors?.lightBlue,
    padding: responsive_factor * 16,
    marginTop: responsive_factor * 22,
  },
});
