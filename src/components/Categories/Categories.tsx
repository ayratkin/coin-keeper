import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Styles from './styles';

const Categories: React.FC = () => {
  return (
    <View style={Styles.categories}>
      <Text style={Styles.categoriesTitle}>Категории расходов</Text>
      <View style={Styles.categoriesItems}>
        <TouchableOpacity style={Styles.categoriesItem}>
          <Text style={Styles.categoriesItemTitle} numberOfLines={1}>
            Путешествия
          </Text>
          <View style={Styles.categoriesItemContainer}>
            <Image
              style={Styles.categoriesItemImage}
              source={require('../../../assets/img/flight.png')}
            />
          </View>
          <Text style={Styles.categoriesItemBalance}>2500 Р</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.categoriesItem}>
          <Text style={Styles.categoriesItemTitle}>Перекусы</Text>
          <View style={Styles.categoriesItemContainer}>
            <Image
              style={Styles.categoriesItemImage}
              source={require('../../../assets/img/coffee-cup.png')}
            />
          </View>
          <Text style={Styles.categoriesItemBalance}>1350 Р</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.categoriesItem}>
          <Text style={Styles.categoriesItemTitle}>Подписки</Text>
          <View style={Styles.categoriesItemContainer}>
            <Image
              style={Styles.categoriesItemImage}
              source={require('../../../assets/img/earth-globe.png')}
            />
          </View>
          <Text style={Styles.categoriesItemBalance}>510 Р</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.categoriesItem}>
          <Text style={Styles.categoriesItemTitle}>Кредит</Text>
          <View style={Styles.categoriesItemContainer}>
            <Image
              style={Styles.categoriesItemImage}
              source={require('../../../assets/img/museum.png')}
            />
          </View>
          <Text style={Styles.categoriesItemBalance}>5500 Р</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.categoriesItem}>
          <Text style={Styles.categoriesItemTitle}>Продукты</Text>
          <View style={Styles.categoriesItemContainer}>
            <Image
              style={Styles.categoriesItemImage}
              source={require('../../../assets/img/shopping-cart.png')}
            />
          </View>
          <Text style={Styles.categoriesItemBalance}>7200 Р</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.categoriesItem}>
          <Text style={Styles.categoriesItemTitle}>Здоровье</Text>
          <View style={Styles.categoriesItemContainer}>
            <Image
              style={Styles.categoriesItemImage}
              source={require('../../../assets/img/cardiogram.png')}
            />
          </View>
          <Text style={Styles.categoriesItemBalance}>820 Р</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.categoriesItem}>
          <Text style={Styles.categoriesItemTitle}>Семья</Text>
          <View style={Styles.categoriesItemContainer}>
            <Image
              style={Styles.categoriesItemImage}
              source={require('../../../assets/img/family.png')}
            />
          </View>
          <Text style={Styles.categoriesItemBalance}>0 Р</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.categoriesItem}>
          <Text style={Styles.categoriesItemTitle}>Алкашка</Text>
          <View style={Styles.categoriesItemContainer}>
            <Image
              style={Styles.categoriesItemImage}
              source={require('../../../assets/img/-18.png')}
            />
          </View>
          <Text style={Styles.categoriesItemBalance}>5500 Р</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.categoriesItem}>
          <Text style={Styles.categoriesItemTitle}>Спорт</Text>
          <View style={Styles.categoriesItemContainer}>
            <Image
              style={Styles.categoriesItemImage}
              source={require('../../../assets/img/excercise.png')}
            />
          </View>
          <Text style={Styles.categoriesItemBalance}>100 Р</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Categories;
