import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import {images} from '../Utils/images';
import {fonts} from '../Utils/fonts';
import {CatergoryData, data, responsive_factor} from '../Utils/Constant';
import Colors from '../Utils/Colors';
import TravelGuide from '../Components/TravelGuide';
import BookButton from '../Components/BookButton';

type ItemProps = {
  navigation: any;
  item: any;
};

{
  /*========== Hightligth Flatlist ========== */
}
const Item = ({item, navigation}: ItemProps) => (
  <View
    style={{
      marginRight: 10,
    }}>
    <View style={styles?.card}>
      <Image style={styles?.listImage} source={item?.image} />
      <View
        style={{
          padding: 20,
        }}>
        <Text style={styles?.cardText}>{item?.title}</Text>
        <Text style={styles?.cardSubText}>{item?.subTitle}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Surffing', {item: item});
        }}
        style={{
          borderRadius: 50,
          backgroundColor: '#E6F2F2',
          position: 'absolute',
          bottom: 10,
          right: 20,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'flex-end',
          padding: 10,
          width: 40,
          height: 40,
        }}>
        <Image source={images?.arrow} />
      </TouchableOpacity>
    </View>
  </View>
);

{
  /*========== Category Flatlist ============= */
}
const ItemSecond = ({title, des, image, subTitle}: ItemProps) => (
  <View>
    <View style={styles?.secCard}>
      <View>
        <Text style={styles?.listText}>{title}</Text>
      </View>
      <View>
        <Image source={images?.arrow} />
      </View>
    </View>
  </View>
);
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles?.container}>
      <ScrollView>
        <Header />
        <ImageBackground
          source={images?.headerImage}
          resizeMode="cover"
          style={styles.image}>
          <Text style={styles.text}>Welcome</Text>
          <Text style={[styles.text, {opacity: 0.9}]}>to Hawaii</Text>
        </ImageBackground>
        {/* =============== Higlights place to visit */}
        <View style={styles?.subContainer}>
          <Text style={styles?.highlightText}>Highlights</Text>
          <FlatList
            horizontal
            data={data}
            renderItem={({item}) => (
              <Item navigation={navigation} item={item} />
            )}
            keyExtractor={item => item.id}
          />
        </View>
        {/* ============= Catergories and Travel Guide ========== */}
        <View style={styles?.secondContainer}>
          <Text style={styles?.highlightText}>Catergories</Text>

          <FlatList
            data={CatergoryData}
            renderItem={({item}) => (
              <ItemSecond
                title={item.title}
                des={item?.des}
                image={item?.image}
                subTitle={item?.subTitle}
              />
            )}
            keyExtractor={item => item.id}
          />

          <TravelGuide />
        </View>
      </ScrollView>
      <BookButton />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  image: {
    // flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: responsive_factor * 600,
  },
  text: {
    color: Colors?.white,
    fontSize: responsive_factor * 56,
    lineHeight: 56,
    fontFamily: fonts.IBMBold,
    textAlign: 'center',
    opacity: 0.6,
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
    width: responsive_factor * 368,
    backgroundColor: Colors.white,
    shadowColor: Colors?.shadow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.16,
    shadowRadius: 16,
    elevation: 4,
    marginRight: 10,
    borderRadius: responsive_factor * 15,
    height: responsive_factor * 340,
    overflow: 'hidden',
    marginBottom: 10,
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
    height: responsive_factor * 170,
    width: '100%',
    resizeMode: 'cover',
  },
  cardText: {
    fontFamily: fonts.IBMBold,
    color: Colors?.shadow,
    fontSize: responsive_factor * 24,
  },
  listText: {
    fontFamily: fonts.IBMRegular,
    color: Colors?.darkGreen,
    fontSize: responsive_factor * 20,
  },
  cardSubText: {
    fontFamily: fonts.IBMRegular,
    color: Colors?.darkGreen,
    fontSize: responsive_factor * 20,
  },
  secondContainer: {
    backgroundColor: Colors?.lightBlue,
    padding: responsive_factor * 16,
    marginTop: responsive_factor * 22,
  },
  TravelCard: {
    borderRadius: responsive_factor * 8,

    borderColor: Colors?.shadow,
    backgroundColor: Colors?.white,
    padding: responsive_factor * 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  guideNmae: {
    fontFamily: fonts?.IBMBold,
    fontSize: responsive_factor * 25,
    color: Colors?.darkGreen,
  },
  guideText: {
    fontFamily: fonts?.IBMRegular,
    fontSize: responsive_factor * 20,
    color: Colors?.darkGreen,
  },
  contactButton: {
    borderRadius: responsive_factor * 8,
    borderWidth: 2,
    paddingTop: 8,
    // paddingHorizontal: 20,
    width: responsive_factor * 156,
    paddingBottom: 11,
    // backgroundColor: 'red',
    marginTop: responsive_factor * 30,
    borderColor: Colors?.shadow,
  },
  contactText: {
    fontFamily: fonts?.IBMBold,
    fontSize: responsive_factor * 20,
    color: Colors?.shadow,
    textAlign: 'center',
  },
  BookButton: {
    position: 'absolute',
    bottom: 0,
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
