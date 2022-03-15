import React from 'react';
import { Text } from 'react-native';
import colors from '../config/colors';

function FormikError({error}) {
    if(!error) return null;
  return (
      <Text style={{color:colors.red}} >{error}</Text>
  );
}

export default FormikError;
