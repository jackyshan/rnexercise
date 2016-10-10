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
  Image
} from 'react-native';

class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };

    this.getMoviesFromApiAsync();
  }

  getMoviesFromApiAsync() {

    // 使用WebSocket
    // var ws = new WebSocket('ws://www.workerman.net:7272');
    // ws.onopen = () => {
    //   // connection opened

    //   // ws.send('something'); // send a message
    // };
    // ws.onmessage = (e) => {
    //   // a message was received
    //   console.log(e.data);
    //   // var responseJson = JSON.parse(e.data);

    //   // const ds1 = new ListView.DataSource({
    //   //   rowHasChanged: (r1, r2) => r1 !== r2
    //   // });
    //   // this.setState({
    //   //   dataSource: ds1.cloneWithRows(responseJson.movies)
    //   // });
    //   // console.log(responseJson)
    // };
    // ws.onerror = (e) => {
    //   // an error occurred
    //   console.log(e.message);
    // };
    // ws.onclose = (e) => {
    //   // connection closed
    //   console.log(e.code, e.reason);
    // };


    //使用XMLHttpRequest API(也就是俗称的ajax)
    // var request = new XMLHttpRequest();
    // request.onreadystatechange = (e) => {
    //   if (request.readyState !== 4) {
    //     return;
    //   }

    //   if (request.status === 200) {

    //     var responseJson = JSON.parse(request.responseText);

    //     const ds1 = new ListView.DataSource({
    //       rowHasChanged: (r1, r2) => r1 !== r2
    //     });
    //     this.setState({
    //       dataSource: ds1.cloneWithRows(responseJson.movies)
    //     });
    //     console.log(responseJson)

    //   } else {
    //     console.warn('error');
    //   }
    // };

    // request.open('GET', 'http://facebook.github.io/react-native/movies.json');
    // request.send();

    //使用Fetch
    // return fetch('http://facebook.github.io/react-native/movies.json')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     const ds1 = new ListView.DataSource({
    //       rowHasChanged: (r1, r2) => r1 !== r2
    //     });
    //     this.setState({
    //       dataSource: ds1.cloneWithRows(responseJson.movies)
    //     });
    //     console.log(responseJson)
    //     return responseJson.movies;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  render() {
    return (
      <View style={{margin: 22, flex: 1}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => 
            <View style={{flexDirection: 'row'}}><Text>{rowData.title}</Text><Text>{rowData.releaseYear}</Text></View>
          }
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);