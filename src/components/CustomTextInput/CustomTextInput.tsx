import React, {FC, useState} from 'react';
import {KeyboardType, StyleProp, TextStyle, ViewStyle} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../constants/Colors';
import {Container, IconContainer, TextInput} from './CustomTextInput.styles';

interface TextInput {
  label?: string;
  placeholder?: string;
  secureText?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  labelStyle?: StyleProp<ViewStyle> | StyleProp<TextStyle>;
  value?: string;
  maxLength?: number;
  keyboardType?: KeyboardType;
  autoCapitalize?: boolean;
  icon?: string;
  validator?: (text: string) => boolean;
  onChange?: (val: string) => void;
}

const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

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
 * @param icon: Name of the icon of the input
 * @param onChange: This is a function that takes value as a parameter.
 * @param validator: Validate the input according to it's regex.
 * @returns -> Custom TextInput
 */
export const CustomTextInput: FC<TextInput> = props => {
  const [state, setState] = useState<InputState>(Pristine);
  const color =
    state === Pristine
      ? Colors.white
      : state === Valid
      ? Colors.green
      : Colors.red;

  const onChangeText = (text: string) => {
    if (props.validator !== undefined) {
      if (props.validator(text)) {
        setState(Valid);
      } else {
        setState(Invalid);
      }
    }
    props.onChange!(text);
  };

  return (
    <Container style={[props.containerStyle, {borderColor: color}]}>
      {props.icon ? (
        <Ionicons name={props.icon} size={20} color={Colors.white} />
      ) : (
        <></>
      )}
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={Colors.white}
        onChangeText={onChangeText}
        secureTextEntry={props.secureText}
        value={props.value}
        keyboardType={props.keyboardType}
        autoCapitalize={props.autoCapitalize ? 'characters' : 'none'}
        style={props.style}
        maxLength={props.maxLength}
      />
      {(state === Valid || state === Invalid) && (
        <IconContainer>
          <Ionicons
            testID="icon"
            name={state === Valid ? 'checkmark' : 'close'}
            size={16}
            color={color}
          />
        </IconContainer>
      )}
    </Container>
  );
};
