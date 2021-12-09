import React from 'react';

import {Text as RNText} from 'react-native-elements';

const Text = ({title, ...props}) => {
  return (
    <RNText h4 {...props}>
      {title}
    </RNText>
  );
};

export default Text;
