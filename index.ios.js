/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';

import {
  AppRegistry,
  Text,
  TextInput,
  View,
  ListView,
  Navigator
} from 'react-native';

import MyScene from './MyScene';

class AwesomeProject extends Component {
  render() {
    return ( < Navigator initialRoute = {
        {
          title: 'My Initial Scene',
          index: 0
        }
      }
      renderScene = {
        (route, navigator) =>
        < MyScene
        title = {
          route.title
        }

        // Function to call when a new scene should be displayed           
        onForward = {
          () => {
            const nextIndex = route.index + 1;
            navigator.push({
              title: 'Scene ' + nextIndex,
              index: nextIndex,
            });
          }
        }

        // Function to call to go back to the previous scene
        onBack = {
          () => {
            if (route.index > 0) {
              navigator.pop();
            }
          }
        }
        />
      }
      />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);