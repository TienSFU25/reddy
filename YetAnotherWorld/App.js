/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showThis: true,
      fontSize: 20
    };
  }

  onPress = () => {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    // LayoutAnimation.spring(); // SHORT-HAND VERSION OF ABOVE LINE
    const animationConfig = {
      duration: 2000,
      update: {
        type: 'linear', 
        property: 'scaleY',
        // springDamping: 0.01, // lower == more dramatic spring 
      },
      create: {
        type: 'spring', 
        property: 'scaleXY',
        springDamping: 0.5,
      },
      delete: {
        type: 'linear',
        property: 'scaleY'
        // property: 'scaleXY'
        // property: 'opacity', // also scaleXY
      },
    };

    LayoutAnimation.configureNext(animationConfig);
    let thingy = LayoutAnimation.Presets;
    console.log(thingy);
    this.setState({
      showThis: !this.state.showThis, 
      // fontSize: this.state.fontSize * 1.25
    });
  }

  render() {
    let Thing = (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Nobody home!</Text>
      </View>
    );

    if (this.state.showThis) {
      // Thing = (
      //   <View style={styles.sectionContainer}>
      //   <Text style={styles.sectionTitle}>Step One</Text>
      //   <Text style={styles.sectionDescription}>
      //     Edit <Text style={styles.highlight}>App.js</Text> to change this
      //     screen and then come back to see your edits.
      //   </Text>
      // </View>
      // );
      Thing = null;
    }

    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <TouchableOpacity onPress={this.onPress}>
                  <Text style={{fontSize: this.state.fontSize}}>Resize me!</Text>
                </TouchableOpacity>
              </View>
              {Thing}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );  
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
