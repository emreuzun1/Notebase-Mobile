import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  FieldContainer,
  FieldText,
  FieldTitle,
  UploadButton,
  UploadButtonContainer,
  UploadContainer,
  UploadText,
} from './Upload.styles';

export const Upload = () => {
  return (
    <UploadContainer>
      <FieldContainer>
        <FieldTitle>PDF : </FieldTitle>
        <UploadButtonContainer>
          <MaterialIcons name="file-upload" size={36} color="gray" />
        </UploadButtonContainer>
      </FieldContainer>
      <FieldContainer>
        <FieldTitle>University :</FieldTitle>
        <FieldText>Yasar University</FieldText>
      </FieldContainer>
      <FieldContainer>
        <FieldTitle>Course ID :</FieldTitle>
        <FieldText>SE 3313</FieldText>
      </FieldContainer>
      <FieldContainer>
        <FieldTitle>Course Name :</FieldTitle>
        <FieldText>Software Construction</FieldText>
      </FieldContainer>
      <UploadButton>
        <UploadText>Upload</UploadText>
      </UploadButton>
    </UploadContainer>
  );
};
