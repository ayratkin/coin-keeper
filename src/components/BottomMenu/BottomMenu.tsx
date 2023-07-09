import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Styles from './styles';

const BottomMenu: React.FC = () => {
  return (
    <View style={Styles.bottomMenu}>
      <TouchableOpacity style={Styles.menuButton}>
        <View style={Styles.menuItem}>
          <Image
            style={Styles.menuItemIcon}
            source={require('../../../assets/img/homepage.png')}
          />
          <Text style={Styles.menuItemText}>Главная</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.menuButton}>
        <View style={Styles.menuItem}>
          <Image
            style={Styles.menuItemIcon}
            source={require('../../../assets/img/notebook.png')}
          />
          <Text style={Styles.menuItemText}>История</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.menuButton}>
        <View style={Styles.menuItem}>
          <Image
            style={Styles.menuItemIcon}
            source={require('../../../assets/img/pie-chart.png')}
          />
          <Text style={Styles.menuItemText}>Аналитика</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={Styles.menuButton}>
        <View style={Styles.menuItem}>
          <Image
            style={Styles.menuItemIcon}
            source={require('../../../assets/img/male-avatar.png')}
          />
          <Text style={Styles.menuItemText}>Профиль</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BottomMenu;
