import React, { Component } from 'react';
import {
    AsyncStorage
} from 'react-native';

const FavesContext = React.createContext();

class FavesProvider extends Component {
  componentDidMount() {
    // create || update
    AsyncStorage.setItem('bananaFlavor', JSON.stringify({ value: 'yay' }));
    // AsyncStorage.setItem('bananaFlavor', JSON.stringify({ value: 'very yummy' }));
    AsyncStorage.setItem('broccoliIceCreamFlavor', JSON.stringify({ value: 'yuck' }));

    AsyncStorage.getItem('bananaFlavor', (err, result) => {
      this.setState({
        bananaFlavor: result
      });
    });

    AsyncStorage.getAllKeys().then(keys => {
        console.log(`keys are: ${keys}`);

        AsyncStorage.multiGet(keys).then(values => {
            console.log(`values are: ${values}`);

            this.setState({
                keys,
                values
            });
        });
    });
  }

  // getFavedSessionIds() {
  //   await AsyncStorage (/* some code here... */);
  // }

  // DRY means dont repeat yourself
  // WET means we enjoy typing

  render() {
    return (
      <FavesContext.Provider value={{
        getFavedSessionIds: () => {/* code here */},
        addFaveSession: (sessionId) => {/* code here */} ,
        removeFaveSession: (sessionId) => {/* code here */},
        ...this.state
      }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export { FavesContext };
export default FavesProvider;