import React, {useState, useEffect} from 'react';
import * as Font from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { Icon } from 'galio-framework';

import argonConfig from '../assets/config/argon.json';
const ArgonExtra = require('../assets/font/argon.ttf');
const IconArgonExtra = createIconSetFromIcoMoon(argonConfig, 'ArgonExtra');

// class IconExtra extends React.Component {
//   state = {
//     fontLoaded: false,
//   }

//   async componentDidMount() {
//     await Font.loadAsync({ ArgonExtra: ArgonExtra });
//     this.setState({ fontLoaded: true });
//   }

//   render() {
//     const { name, family, ...rest } = this.props;

//     if (name && family && this.state.fontLoaded) {
//       if (family === 'ArgonExtra') {
//         return <IconArgonExtra name={name} family={family} {...rest} />;
//       }
//       return <Icon name={name} family={family} {...rest} />;
//     }

//     return null;
//   }
// }

const IconExtra = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    (async () => {
      await Font.loadAsync({ ArgonExtra: ArgonExtra });
      setFontLoaded(true)
    })()
  }, [])

  const { name, family, ...rest } = props;

  if (name && family && fontLoaded) {
    if (family === 'ArgonExtra') {
      return <IconArgonExtra name={name} family={family} {...rest} />;
    }
    return <Icon name={name} family={family} {...rest} />;
  }

  return null;
}

export default IconExtra;
