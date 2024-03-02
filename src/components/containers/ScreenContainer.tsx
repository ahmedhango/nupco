import React from 'react';
import {StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import {IScreenContainer} from '../../definitions/components/IScreenContainer';
const ScreenContainer = ({
  testID,
  style,
  children,
  hasStatusBar = true,
  statusBarBackgroundColor,
  StatusBarStyle,
  header,
  disableBottomSafeAreaView = false,
}: IScreenContainer): JSX.Element => {
  return (
    <View testID={testID} style={styles.parentContainerStyle}>
      {hasStatusBar && (
        <SafeAreaView
          style={{
            backgroundColor: statusBarBackgroundColor,
          }}
        />
      )}
      <StatusBar
        animated={true}
        backgroundColor={statusBarBackgroundColor} // android: bar backgroundcolor
        barStyle={StatusBarStyle} // bar text color [ light-content, dark-content]
        translucent={!hasStatusBar} // android: transparent statusbar
      />
      {header && header()}
      <View
        style={{
          ...styles.containerStyle,
          ...style,
        }}>
        {children}
      </View>
      {!disableBottomSafeAreaView && (
        <SafeAreaView
          style={{
            ...styles.safeAreaViewPaddingBottom,
            backgroundColor: style?.backgroundColor,
          }}
        />
      )}
    </View>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  parentContainerStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  containerStyle: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
  },
  safeAreaViewPaddingBottom: {
    paddingBottom: 24,
  },
});
