import React from 'react';
import { Text, Platform } from 'react-native';
import { PropTypes } from 'prop-types';

const StyledText = ({ style, children }) => (
  <Text
    style={[style, { fontFamily: Platform.OS === 'ios' ? 'Courier' : 'MontserratRegular' }]}
  >
    {children}
  </Text>
);

StyledText.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

StyledText.defaultProps = {
  style: {},
};

export default StyledText;
