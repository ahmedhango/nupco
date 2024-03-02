import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {ICText} from '../../definitions/components/ICText';
import typography from '../../theme/typography';

const CText = ({style, children, ...props}: ICText) => {
  return (
    <Text
      {...props}
      style={{...styles.defaultStyle, ...style}}
      allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default CText;

const styles = StyleSheet.create({
  defaultStyle: {
    fontSize: typography.fontSize.fs14,
    fontFamily: typography.fontFamily.Tajawal_Regular,
    textAlign: 'left',
    color: '#000000',
  },
});
