import React, {FC} from 'react';
import {ImageBackground, StyleProp, ViewStyle} from 'react-native';

interface I {
  children: Element;
  style?: StyleProp<ViewStyle>;
}

export const Background: FC<I> = props => {
  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={[{flex: 1}, props.style]}
      resizeMode="cover">
      {props.children}
    </ImageBackground>
  );
};
