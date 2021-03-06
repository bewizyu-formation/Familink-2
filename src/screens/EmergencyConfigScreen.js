import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../components/Header';
// import MenuIcon from '../../assets/icon_emergency_config.png';
// import { PROFILE_SCENE_NAME } from './ProfileScreen';
import familinkStyles from '../Style';
import { headerconfigUrgency } from '../Util';

export const EMERGENCY_CONFIG_SCENE_NAME = 'EMERGENCY_CONFIG_SCENE';

export default class EmergencyConfigScreen extends Component
{
  static navigationOptions = {
    drawerLabel: headerconfigUrgency,
    // drawerIcon: (<Image source={MenuIcon} style={[familinkStyles.burgerMenuIcon]} />),
  };

  render()
  {
    const navigation = this.props.navigation;
    return (
      <View style={familinkStyles.container}>
        <Header
          navigation={navigation}
          title={headerconfigUrgency}
        />
      </View>
    );
  }
}

EmergencyConfigScreen.propTypes = {
  navigation: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
};
