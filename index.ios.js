import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Slider,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

class colors extends Component {
  constructor() {
    super();
    this.addColor = this.addColor.bind(this);
    this.state = {
      red: 0,
      green: 0,
      blue: 0,
      colors: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Colors 🖌
        </Text>
        <View style={styles.sliderView}>
          <Text style={styles.numberText}>Red: {this.state.red}</Text>
        <Slider
          onValueChange={(value) => 
            this.setState({red: value})
          }
          minimumValue={0}
          maximumValue={255}
          step={1}
          style={{width: 200}}/>
        </View>
        <View style={styles.sliderView}>
        <Text style={styles.numberText}>Green: {this.state.green}</Text>
        <Slider
          onValueChange={(value) => 
            this.setState({green: value})
          }
          minimumValue={0}
          maximumValue={255}
          step={1}
          style={{width: 200}}/>
        </View>
        <View style={styles.sliderView}>
        <Text style={styles.numberText}>Blue: {this.state.blue}</Text>
        <Slider
          onValueChange={(value) => 
            this.setState({blue: value})
          }
          minimumValue={0}
          maximumValue={255}
          step={1}
          style={{width: 200}}/>
        </View>
        <View style={{backgroundColor: "rgb(" + this.state.red + "," + this.state.green + "," + this.state.blue +")", height: 100, alignSelf:"stretch"}}/>
        <TouchableHighlight onPress={this.addColor} underlayColor={'rgba(170, 199, 224, 1.00)'}>
          <Text style={styles.buttonText}>Add color</Text>
        </TouchableHighlight>
        <ScrollView style={{flexDirection: "column", alignSelf:"stretch", flexWrap: 'wrap'}}>
        {
          this.state.colors.map(function(color, index){
            return (
              <View key={index} style={{height: 40, alignSelf:"stretch", backgroundColor: color}}>
                <Text style={{textAlign: "center", marginTop: 13}}>{color}</Text>
              </View>
            )
          }.bind(this))
        }
        </ScrollView>
      </View>
    );
  }

  addColor(){
    var colors = this.state.colors;
    colors.unshift("rgb(" + this.state.red + "," + this.state.green + "," + this.state.blue +")");
    this.setState({
      colors: colors,
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(170, 199, 224, 1.00)',
    paddingTop: 15,
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  sliderView: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginRight: 20,
    marginLeft: 20,
  },
  numberText: {
    alignSelf: "center",
    color: '#333333',
    marginRight: 5,
  },
  buttonText: {
    margin: 10,
    padding: 10,
    backgroundColor: "rgba(0, 74, 147, 1.00)",
    color: "white",
    borderRadius: 10,
  }
});

AppRegistry.registerComponent('colors', () => colors);
