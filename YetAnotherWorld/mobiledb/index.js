/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import Provider from './FavesContext';
import SomeComponent from './SomeComponent';

export default class App extends React.Component {
  render() {
    return (
      <Provider>
          <SomeComponent />
      </Provider>
    );  
  }
};
