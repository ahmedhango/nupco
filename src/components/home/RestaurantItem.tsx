/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {IRestaurant, TListType} from './../../definitions/redux/IHome';
import CImage from '../common/CImage';
import CText from '../common/CText';
import {styles} from './styels';

interface IRestaurantItem {
  listType: TListType;
  restaurant: IRestaurant;
}

const RestaurantItem = ({listType = 'list', restaurant}: IRestaurantItem) => {
  const flex = listType === 'list' ? 1 : 0.5;
  return (
    <View
      style={{
        ...styles.container,
        flex,
      }}>
      <CImage style={styles.img} source={{uri: restaurant?.image_url}} />
      <View style={styles.viewText}>
        <CText
          numberOfLines={1}
          style={{...styles.name, width: flex == 1 ? '100%' : 70}}>
          {restaurant?.name}
        </CText>
        <CText
          numberOfLines={1}
          style={{...styles.create, width: flex === 1 ? '100%' : 70}}>
          {restaurant?.name}
        </CText>
        <CText
          numberOfLines={1}
          style={{...styles.update, width: flex === 1 ? '100%' : 70}}>
          {restaurant?.name}
        </CText>
        <CText
          numberOfLines={1}
          style={{...styles.number, width: flex === 1 ? '100%' : 70}}>
          {restaurant?.review_count}
        </CText>
      </View>
    </View>
  );
};

export default RestaurantItem;
