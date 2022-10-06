import {View, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');

const SingleScreen = ({item}: {item: any}) => {
  return (
    <View style={styles.itemWrapper}>
      <Image
        source={{
          uri: item,
        }}
        style={styles.image}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  itemWrapper: {
    width,
    height,
  },
  logo: {
    width,
    height,
  },
  image: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
});
export default SingleScreen;
