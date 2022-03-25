import React, {FC} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface I {
  children: Element;
  style?: StyleProp<ViewStyle>;
}

export const Background: FC<I> = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <ImageBackground
        source={require('../../assets/background.png')}
        style={[{flex: 1, backgroundColor: 'black'}, props.style]}
        resizeMode="cover">
        {props.children}
      </ImageBackground>
    </SafeAreaView>
  );
};
