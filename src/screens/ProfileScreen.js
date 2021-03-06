import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import MenuIcon from '../../assets/icon_profile.png';
import Header from '../components/Header';
import UpdateProfil from '../components/UpdateProfil';
import familinkStyles from '../Style';
import { headerProfile } from '../Util';

export const PROFILE_SCENE_NAME = 'PROFILE_SCENE';

export default class ProfileScreen extends Component
{
  static navigationOptions = {
    drawerLabel: headerProfile,
    drawerIcon: (<Image source={MenuIcon} style={[familinkStyles.burgerMenuIcon]} />),
  };
  render()
  {
    const navigation = this.props.navigation;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={familinkStyles.container}>
          <Header
            navigation={navigation}
            title={headerProfile}
          />
          <UpdateProfil />
          <View style={familinkStyles.bottomBar} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
ProfileScreen.propTypes = {
  navigation: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
};
