import {Image, Text, TouchableOpacity, View} from 'react-native';
import styled from 'styled-components';
import {Colors} from '../../constants/Colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/Screen';

export const ProfileContainer = styled(View)({
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  padding: 12,
  backgroundColor: 'white',
  paddingTop: 24,
});

export const ProfileHeaderContainer = styled(View)({
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
});

export const ProfileCircle = styled(View)({
  width: 70,
  height: 70,
  borderRadius: 35,
  backgroundColor: '#F5F5F5',
  borderWidth: 1,
  borderColor: '#59417D',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ProfileImage = styled(Image)({});

export const ProfileDetailContainer = styled(View)({
  width: '60%',
  marginLeft: 4,
  marginRight: 4,
  paddingLeft: 4,
  justifyContent: 'space-between',
});

export const ProfileName = styled(Text)({
  fontSize: 18,
  fontWeight: '500',
  marginBottom: 4,
});

export const ProfileDetailText = styled(Text)({
  fontSize: 13,
  fontWeight: '300',
});

export const CounterContainer = styled(View)({
  alignItems: 'center',
});

export const CounterText = styled(Text)({
  fontSize: 20,
  fontWeight: '600',
});

export const Seperator = styled(View)({
  height: '50%',
  backgroundColor: 'black',
  width: 1,
});

export const TabContainer = styled(View)({
  flexDirection: 'row',
  width: '100%',
  height: 50,
  borderBottomWidth: 1,
  borderColor: '#D3D3D3',
  marginTop: 24,
});

export const Tab = styled(TouchableOpacity)({
  width: '50%',
  justifyContent: 'center',
  alignItems: 'center',
});

export const TabText = styled(Text)({
  fontSize: 20,
  fontWeight: '700',
});

export const UploadButton = styled(TouchableOpacity)({
  position: 'absolute',
  right: 8,
  top: 600,
  width: 60,
  height: 60,
  borderRadius: 35,
  backgroundColor: Colors.orange,
  justifyContent: 'center',
  alignItems: 'center',
});
