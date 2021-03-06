/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {State} from '../../Interfaces/State';
import {Document} from '../../Interfaces/Document';
import {MaterialCard} from '../../components/MaterialCard/MaterialCard';
import {Background} from '../../components/Background/Background';
import {getStudentDocuments} from '../../redux/reducers/selector';
import {
  DepartmentText,
  Dropdown,
  Icon,
  NameText,
  PointContainer,
  PointText,
  ProfileWrapper,
  SchoolText,
  TopContainer,
} from './Profile.styles';
import {Colors} from '../../constants/Colors';
import {Faculties} from '../../constants/Faculty';
import {updateStudent} from '../../lib/api';
import {requestUser} from '../../redux/actions';

export const Profile = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const {student} = useAppSelector((state: State) => state.auth);
  const [newStudent, setNewStudent] = useState<any>(student.user);
  const [fullName, setFullName] = useState<string>(
    student.user.first_name + ' ' + student.user.last_name,
  );
  const documents: Document[] = useSelector(getStudentDocuments);
  const dispatch = useAppDispatch();

  const saveStudent = async () => {
    await updateStudent(newStudent).then(res => {
      if (res.status === 200) {
        dispatch(requestUser(student.token));
      }
    });
  };

  return (
    <Background>
      <TopContainer>
        <Icon
          name={editMode ? 'content-save' : 'account-edit'}
          size={24}
          color={Colors.white}
          onPress={() => {
            if (editMode) {
              saveStudent();
            }
            setEditMode(!editMode);
          }}
        />
        <ProfileWrapper>
          <NameText
            editable={editMode ? true : false}
            onChangeText={text => {
              setFullName(text);
              setNewStudent({...newStudent, first_name: text});
            }}
            style={
              editMode
                ? {
                    borderBottomWidth: 1,
                    borderColor: Colors.white,
                    paddingLeft: 8,
                    paddingRight: 8,
                  }
                : {}
            }>
            {fullName}
          </NameText>
          <SchoolText>{newStudent.university}</SchoolText>
          {editMode ? (
            <Dropdown
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={[
                styles.selectedTextStyle,
                isFocus && {color: Colors.black},
              ]}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={Faculties}
              search
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select faculty' : '...'}
              searchPlaceholder="Search..."
              value={newStudent.faculty}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(item: any) => {
                setIsFocus(false);
                setNewStudent({...newStudent, faculty: item});
              }}
              renderLeftIcon={() => (
                <AntDesign color={Colors.white} name="menu-fold" size={24} />
              )}
            />
          ) : (
            <DepartmentText>{newStudent.faculty}</DepartmentText>
          )}

          <PointContainer>
            <PointText>{newStudent.point}</PointText>
            <MaterialIcon
              name="star-four-points"
              size={24}
              color={Colors.purple}
              style={{marginLeft: 4}}
            />
          </PointContainer>
        </ProfileWrapper>
      </TopContainer>
      <FlatList
        style={{marginTop: 8}}
        data={documents}
        keyExtractor={(item: Document) => item.id!}
        renderItem={({item}) => <MaterialCard item={item} />}
      />
    </Background>
  );
};

const styles = StyleSheet.create({
  placeholderStyle: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: 'Raleway',
    marginLeft: 8,
  },
  selectedTextStyle: {
    fontSize: 18,
    color: Colors.white,
    marginLeft: 8,
    fontFamily: 'Raleway',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
