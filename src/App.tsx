import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import styled from 'styled-components';

const {height, width} = Dimensions.get('window');

const HelloWorldContainer = styled(View)`
  flex: 1;
  height: ${height}px;
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;

const HelloWorldText = styled(Text)`
  font-size: 58px;
`;

const HelloWorld = () => {
  return (
    <HelloWorldContainer>
      <HelloWorldText>Hello World!</HelloWorldText>
    </HelloWorldContainer>
  );
};

export default HelloWorld;
