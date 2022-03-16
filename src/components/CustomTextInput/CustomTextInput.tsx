import React, {FC} from 'react';
import {KeyboardType, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Colors} from '../../constants/Colors';
import {Container, Input, Label} from './CustomTextInput.styles';

interface TextInput {
  label?: string;
  placeholder?: string;
  secureText?: boolean;
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  labelStyle?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  value?: string;
  maxLength?: number;
  keyboardType?: KeyboardType;
  autoCapitalize?: boolean;
  onChange?: (val: any) => void;
}

/**
 * @param label : Label for TextInput.
 * @param placeholder: Placeholder for TextInput.
 * @param secureText: Secure the text in TextInput.
 * @param style: If you want to use custom style, you can give as a parameter.
 * @param labelStyle: If you want to style label, you can give as a parameter.
 * @param value: Value for TextInput.
 * @param maxLength: It is a number that limits the length of the TextInput.
 * @param keyboardType: We can change the type of keyboard as we want. Ex : 'email'.
 * @param autoCapitalize: If you want to capitalize the value, you can set this true.
 * @param onChange: This is a function that takes value as a parameter.
 * @returns -> Custom TextInput
 */
export const CustomTextInput: FC<TextInput> = props => {
  return (
    <Container>
      <Input
        placeholder={props.placeholder}
        placeholderTextColor={Colors.white}
        onChangeText={props.onChange}
        secureTextEntry={props.secureText}
        value={props.value}
        keyboardType={props.keyboardType}
        autoCapitalize={props.autoCapitalize ? 'characters' : 'none'}
        style={props.style}
        maxLength={props.maxLength}
      />
    </Container>
  );
};
