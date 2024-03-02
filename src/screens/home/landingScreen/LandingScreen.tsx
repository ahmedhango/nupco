import React from 'react';
import {CText, ScreenContainer} from '../../../components';
import {styles} from './styles';
import {useLandingScreen} from '../../../hooks/home/useLandingScreen';
import {FlatList, Pressable, View} from 'react-native';
import List from '../../../assets/svgs/List';
import Grid from '../../../assets/svgs/Grid';
import RestaurantItem from '../../../components/home/RestaurantItem';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const LandingScreen = (): JSX.Element => {
  const {listType, onPressToggleListType, restaurants, processing} =
    useLandingScreen();

  // Placeholder for list items
  const renderSkeletonPlaceholder = () => (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        marginVertical={10}
        flexDirection="row"
        // justifyContent="space-around"
        alignItems="center">
        <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
        <SkeletonPlaceholder.Item marginHorizontal={10}>
          <SkeletonPlaceholder.Item width={80} height={20} borderRadius={4} />
          <SkeletonPlaceholder.Item width={80} height={20} borderRadius={4} />
          <SkeletonPlaceholder.Item width={80} height={20} borderRadius={4} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );

  return (
    <ScreenContainer disableBottomSafeAreaView>
      <View style={styles.row}>
        <CText style={styles.cost}>{'المجتمعات'}</CText>
        <Pressable onPress={onPressToggleListType}>
          {listType === 'list' ? <List /> : <Grid />}
        </Pressable>
      </View>
      {processing ? (
        <FlatList
          data={[1, 1, 1, 1, 1, 1, 1, 1]}
          renderItem={renderSkeletonPlaceholder}
          showsVerticalScrollIndicator={false}
          key={listType + 'fake'}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <FlatList
          data={restaurants}
          renderItem={({item}) => (
            <RestaurantItem restaurant={item} listType={listType} />
          )}
          showsVerticalScrollIndicator={false}
          key={listType}
          numColumns={listType != 'list' ? 2 : 1}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </ScreenContainer>
  );
};

export default LandingScreen;
