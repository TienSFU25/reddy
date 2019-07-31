import React from 'react';
import { Animated, Button, View } from 'react-native';

export default class Rainbow extends React.Component {
    state = {
        translateValue: new Animated.ValueXY(),
        color: new Animated.Value(0)
    }

    animateCircle = () => {
      let randomX = parseInt((Math.random() - 0.5) * 600);
      let randomY = parseInt((Math.random() - 0.5) * 600);

      this.state.color.setValue(0);

      Animated.parallel([
        Animated.timing(
          // move the ball to a random new spot
          this.state.translateValue, 
            {
              toValue: {x: randomX, y: randomY},
              duration: 2000
            },
        ),
          // change color linearly
          // value will be interpolated to color strings in render()
        Animated.timing(
          this.state.color,
          { 
              toValue: 10,
              duration: 2000,
          }
        )
      ]).start((animation) => {
        // infinite animations
        if (animation.finished) {
          this.animateCircle();
        }
      });
    }
  
    render() {
      let { color } = this.state;
      let animatedStyles = { 
        transform: [
          { translateX: this.state.translateValue.x },
          { translateY: this.state.translateValue.y }
        ],
        backgroundColor: color.interpolate({
          // 0 -> 1: green -> red
          // 1 -> 5: red -> green
          // (...)
          inputRange: [0, 1, 5, 10],
          outputRange: ['green', 'red', 'green', 'blue']
        })
      };
      
      return (
        <View>
          <Button title="Move yo ball" onPress={this.animateCircle.bind(this)} />
          <Animated.View // Special animatable View
            style={{
              ...animatedStyles,
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          />
        </View>
      );
    }
  }