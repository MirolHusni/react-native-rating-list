import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Stars from 'react-native-stars';

export default class HorizontalList extends Component {
  constructor(props) {
    super(props);
  }

  itemList() {
    return this.props.items.map(item => (
      <View key={item.id} style={{paddingRight: 5, paddingLeft: 5}}>
        <TouchableOpacity
          onPress={() => {
            var url = item.image.uri ?? this.props.defaultUrl;
            alert(url);
          }}>
          <Image source={item.image} style={styles.imageStyle} />
        </TouchableOpacity>
        <View style={{marginVertical: 5}}>
          <Text style={styles.categoryTextStyle}>{item.category}</Text>
        </View>
        {item.rating ? (
          <View
            style={{
              alignItems: 'flex-start',
              marginBottom: 8,
            }}>
            <Stars
              display={item.rating}
              spacing={5}
              count={5}
              starSize={14}
              fullStar={require('./images/star_filled.png')}
              emptyStar={require('./images/star_corner.png')}
            />
          </View>
        ) : (
          <View />
        )}
        <View style={{width: 142}}>
          <TouchableOpacity
            onPress={() => {
              var url = item.image.uri ?? this.props.defaultUrl;
              alert(url);
            }}>
            <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      </View>
    ));
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          width: '100%',
        }}>
        <View style={{width: '80%'}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              paddingLeft: 20,
            }}>
            {this.props.header}
          </Text>
        </View>
        <View
          style={{
            height: this.props.scrollViewHeight,
          }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{paddingVertical: 15, paddingHorizontal: 20}}>
            {this.itemList()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 135,
    width: 130,
    borderRadius: 30,
  },
  categoryTextStyle: {
    fontWeight: '500',
    fontSize: 8,
    textTransform: 'uppercase',
  },
});

HorizontalList.propTypes = {
  header: PropTypes.string,
  items: PropTypes.array,
  defaultUrl: PropTypes.string,
  scrollViewHeight: PropTypes.number,
};

HorizontalList.defaultProps = {
  header: 'Header',
  items: [],
  defaultUrl: 'https://cinemapp.com/subscribe-now',
  scrollViewHeight: 250,
};
