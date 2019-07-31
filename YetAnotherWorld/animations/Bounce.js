import React from 'react';
import { Animated, View } from 'react-native';

export default class Bouncy extends React.Component {
    state = {
      marginTopAnim: new Animated.Value(1)
    }
  
    componentDidMount() {
      Animated.spring(
        this.state.marginTopAnim,
        {
          toValue: 2,
          bounciness: 20
        }
      ).start();
    }
  
    render() {
      let { marginTopAnim } = this.state;
  
      return (
        <View>
          <Animated.View                 // Special animatable View
            style={{
              ...this.props.style,
              backgroundColor: '#2196F3',
              width: 100,
              height: 100,
              borderRadius: 50,
              transform: [{scale: marginTopAnim}]
            }}
          />
        </View>
      );
    }
  }