import React, {FC} from 'react';
import {KeyboardType, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Container, Input, Label} from './CustomTextInput.styles';

interface TextInput {
  label?: string;
  placeholder?: string;
  secureText?: boolean;
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  labelStyle?: any;
  value?: string;
  maxLength?: number;
  keyboardType?: KeyboardType;
  autoCapitalize?: boolean;
  showSecureTextButton?: boolean;
  editable?: boolean;
  onChange?: (val: any) => void;
}

export const CustomTextInput: FC<TextInput> = props => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <Input
        placeholder={props.placeholder}
        editable={props.editable}
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
