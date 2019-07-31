import React from 'react';
import { Animated, Text, View } from 'react-native';
import BunchOfText from '../App';
import Bouncy from './Bounce';
import Panny from './Panny';
import RainbowBall from './Rainbow';
import Red from './Red';

class FadeInView extends React.Component {
  state = {
    mt: new Animated.Value(1),
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.parallel([
      Animated.timing(                  // Animate over time
        this.state.fadeAnim,            // The animated value to drive
        {
          toValue: 1,                   // Animate to opacity: 1 (opaque)
          duration: 3000,              // Make it take a while
        }
      )
    ]).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
          transform: [{
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [1000, 0]  // 0 : 150, 0.5 : 75, 1 : 0
            }),
          }],
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends React.Component {
  render() {
    return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/* <Panny> */}
            {/* <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
              <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
            </FadeInView> */}
            {/* <Bouncy /> */}
              {/* <RainbowBall /> */}
              <Red />
              {/* <BunchOfText /> */}
            {/* </Panny> */}
          </View>
    )
  }
}
