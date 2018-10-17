import React from "react";
import { View, Text, Button } from "react-native";

import { connect } from "react-redux";

class DetailScreen extends React.Component {
  // create the title for the screen
  static navigationOptions = {
    title: "Details"
  };

  // create constructor to get access to props
  constructor(props) {
    super(props);
  }

  render() {
    let  { currentItem } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail Screen Stack Navigation Sample</Text>
        <Text>{currentItem.name}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { currentItem } = state;
  return {
    currentItem
  };
};

export default connect(mapStateToProps)(DetailScreen);
