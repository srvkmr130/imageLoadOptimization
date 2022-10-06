import React, {useState, useEffect} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import SingleScreen from './SingleScreen';

const {width, height} = Dimensions.get('window');

const ScrollScreen = () => {
  const [images, setImages] = useState([]);
  const [limit, setLimit] = useState(2);

  const api = `https://api.pexels.com/v1/curated?per_page=${limit}`;
  useEffect(() => {
    fetchImages();
  }, [limit]);

  const fetchImages = () => {
    fetch(api, {
      headers: new Headers({
        Authorization:
          '563492ad6f91700001000001a251bb9105654efe827fc821371b0b2c',
      }),
    })
      .then(res => res.json())
      .then(data => {
        const fetchedImages = data.photos;
        const filterData: never[] = fetchedImages.map((x: any) => x.src.large);
        setImages(filterData);
      })
      .catch(err => console.log(err));
  };
  console.log('\tTotal Images :', images.length);

  return (
    <View style={{backgroundColor: 'aliceblue'}}>
      <FlatList
        data={images}
        pagingEnabled
        scrollEnabled
        style={{height, width}}
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        renderItem={({item}) => {
          return <SingleScreen item={item} />;
        }}
        onEndReachedThreshold={1}
        onEndReached={() => {
          setLimit(prev => prev + 1);
        }}
      />
    </View>
  );
};

export default ScrollScreen;
