import React from 'react';
import { Animated, Button, View } from 'react-native';

export default class Rainbow extends React.Component {
    state = {
      col: new Animated.Value(0)
      // col: new Animated.Value(0.5)
    }
  
    componentDidMount() {
        // this.flipColor();
    }

    flipColor() {
        let currentColor = this.state.col._value;
        // Animated.timing(                  // Animate over time
        //     this.state.col,            // The animated value to drive
        //     {
        //       toValue: 1 - currentColor,                   // Animate to opacity: 1 (opaque)
        //       duration: 3000,              // Make it take a while
        //     }
        // ).start();

        Animated.decay(                  // Animate over time
            this.state.col,            // The animated value to drive
            {
              velocity: -0.005    // Make it take a while
            }
        ).start();        
    }
  
    render() {
      let { col } = this.state;
  
      return (
        <View>
          <Button title="Flip color!" onPress={this.flipColor.bind(this)} />
          <Animated.View                 // Special animatable View
            style={{
              ...this.props.style,
              backgroundColor: col.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['green', 'red', 'blue']  // 0 : 150, 0.5 : 75, 1 : 0
              }),
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          />
        </View>
      );
    }
  }