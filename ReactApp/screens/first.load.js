/**
 * First Load
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
  TouchableOpacity,
  StatusBar,
} from 'react-native'

// App Globals
import AppStyles from '../styles'
import AppConfig from '../config'

// Components
import Button from '../components/button'
import ListRow from '../components/list.row'

// Screens
import Form from './forms'

/* Component ==================================================================== */
class FirstLoad extends Component {
  static componentName = 'FirstLoad';

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    close: React.PropTypes.func.isRequired,
  }

	/**
	  * Navigates to Sign Up
	  */
	_navigate = () => {
    this.props.close();

	  this.props.navigator.push({
	    title: 'Sign Up',
	    component: Form, 
	    index: 2,
	  });
	}

  /**
    * RENDER
    */
  render = () => {
    return (
      <View style={[AppStyles.container, styles.containerCover]}>
       <ListRow 
            title={''}
            image={'/Users/vinmmm/Desktop/react-native-starter-app/ReactApp/images/Artwork2.png'}
            onPress={()=>{alert('Go To Entry View')}} />
        
      	<View style={[AppStyles.paddingHorizontal]}>
          <Text style={[AppStyles.baseText, AppStyles.p, AppStyles.centered]}>
            Sign Up Now!
          </Text>

          <View style={[AppStyles.spacer_10]} />

          <View style={[AppStyles.row]}>
          	<View style={[AppStyles.flex1, AppStyles.paddingRightSml]}>
		          <Button
		            text={'Sign In/Up Now'}
		            onPress={()=>this._navigate()} />
            </View>

            <View style={[AppStyles.flex1, AppStyles.paddingLeftSml]}>
		          <Button
		            text={'Skip'}
		            type={'outlined'}
		            onPress={this.props.close} />
        		</View>
      		</View>
      	</View>
      </View>
    );
  }
}

/* Styles ==================================================================== */
const styles = StyleSheet.create({
	containerCover: {
		marginTop: -AppConfig.navbarHeight,
		backgroundColor: "black",
		justifyContent: 'center',
	},
});

/* Export Component ==================================================================== */
export default FirstLoad