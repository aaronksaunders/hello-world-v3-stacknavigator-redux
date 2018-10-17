import React from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import { setCurrentItem } from "../redux/shopping-actions";

class HomeScreen extends React.Component {
  // create the title for the screen
  static navigationOptions = {
    title: "Home"
  };

  // create constructor to get access to props
  constructor(props) {
    super(props);
  }

  onItemPressed = _item => {
    console.log(_item);
    this.props.setCurrentItem(_item);
    this.props.navigation.navigate("Detail");
  };

  render() {
    let { listData } = this.props;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 18, padding: 16, fontWeight: "bold" }}>
          Home Screen Stack Navigation Sample
        </Text>
        <FlatList
          style={{ padding: 10 }}
          data={listData}
          renderItem={_rowData => {
            return (
              <RowItem
                // pass in all of the data that goes to rowItem
                {..._rowData}
                // pass in function to call onPress
                onItemPressed={this.onItemPressed.bind(this, _rowData.item)}
              />
            );
          }}
        />
      </View>
    );
  }
}

// get the values from the state that we need in the
// component and map them to properties
const mapStateToProps = state => {
  return {
    listData: state.listData
  };
};

export default connect(
  // see description above
  mapStateToProps,
  // this gets the specific "action" and makes it available as a property
  // @see ../redux/shopping-actions
  { setCurrentItem }
)(HomeScreen);

/**
 *
 * @param {*} param0
 */
const RowItem = ({ item, index, onItemPressed }) => {
  // use properties that were passed in to render the row item
  return (
    <TouchableOpacity
      style={{ flex: 1, flexDirection: "row", paddingBottom: 4 }}
      onPress={onItemPressed}>
      <Text style={{ width: "5%" }}>{index}</Text>
      <Text style={{ width: "15%" }}>{item.key}</Text>
      <Text style={{ width: "80%" }}>{item.name}</Text>
    </TouchableOpacity>
  );
};
