/**
 * List Row
 *
    <ListRow 
      title={title}
      image={entry.entry_image}
      onPress={()=>{alert('Go To Entry View')}} />
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'

/* Component ==================================================================== */
class BackgroundRow extends Component {
  static propTypes = {
    
    image: React.PropTypes.string,
  }

  static defaultProps = {
    image: 'http://lorempixel.com/g/1000/250/nature',
  }

  /**
    * RENDER
    */
  render = () => {
    let {image} = this.props;

    if(image) {
      return (
        <TouchableOpacity 
          style={[styles.listRow, image && styles.imageBackground]} 
          onPress={onPress} activeOpacity={0.7}>
          <Image source={{uri: image}} style={[styles.imageBackground_image]}>
            <Text style={[AppStyles.baseText, styles.listRow_text, styles.listRowImage_text]}>{title.toUpperCase()}</Text>
          </Image>
        </TouchableOpacity>
      )
    } else {
      return (
        <TouchableOpacity style={[styles.listRow]} onPress={onPress} activeOpacity={0.7}>
          <View style={styles.listRowInner}>
            <Text style={[AppStyles.baseText, styles.listRow_text]}>{title.toUpperCase()}</Text>
          </View>
        </TouchableOpacity>
      )
    }
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  listRow: {
    left: 0,
    right: 0,
    backgroundColor: "#FFF",
  },
  listRowInner: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: AppConfig.borderColor,
  },
  listRow_text: {
    color: AppConfig.textColor,
    textAlign: 'center',
    fontWeight: '500',
    backgroundColor: 'transparent',
  },
  listRowImage_text: {
    color: "red",
  },

  // With Image
  imageBackground: {
    backgroundColor: "blue",
  },
  imageBackground_image: {
    height: AppConfig.windowHeight / 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  }
});

/* Export Component ==================================================================== */
export default BackgroundRow