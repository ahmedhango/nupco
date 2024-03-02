// import {CommonActions, useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store/store';
import {
  homescreen_getResaurants,
  homescreen_toggleListType,
} from '../../redux/actions';

export const useLandingScreen = () => {
  // const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const processing = useAppSelector(state => state.homeReducer.processing);
  const listType = useAppSelector(state => state.homeReducer.listType);
  const restaurants = useAppSelector(state => state.homeReducer.restaurants);

  useEffect(() => {
    dispatch(homescreen_getResaurants());
    return () => {};
  }, []);

  const onPressToggleListType = () => {
    dispatch(homescreen_toggleListType());
  };

  return {
    processing,
    listType,
    onPressToggleListType,
    restaurants,
  };
};
