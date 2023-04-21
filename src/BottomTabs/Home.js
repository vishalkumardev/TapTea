import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const Navigation = useNavigation();

  useEffect(() => {
    const unsuscribe = Navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      BackHandler.exitApp();
    });
    return unsuscribe;
  }, [Navigation]);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
        source={require('../../assets/images/Home.png')}
        style={{
          width: '100%',
          height: '70%',
          resizeMode: 'cover',
          alignSelf: 'center',
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
        }}
      />
      <View
        style={{
          height: '30%',
          backgroundColor: '#fff',
          paddingTop: 20,
          paddingHorizontal: 20,
        }}>
        <Text className="text-sm font-Medium self-start text-primary ">
          Recommended
        </Text>
        <Text className="text-sm font-Regular self-end ">Sahu Chai Wale</Text>
        <View className="pt-5 flex-row justify-between items-center">
          <View>
            <Text className="text-lg font-Medium">Chai (Extra )</Text>
            <Text className="text-sm font-Regular">
              Milk, Sugar,Tea and Masala
            </Text>
          </View>
          <Text className="font-SemiBold text-3xl text-secondary">₹ {8}</Text>
        </View>
        <TouchableOpacity className="bg-secondary mt-5 py-4 rounded-full">
          <Text className="text-center text-light font-SemiBold text-sm">
            Order Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
