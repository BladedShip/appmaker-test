import React from "react";
import { View, Text } from "react-native";

type Props = {};

const SeeMore = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>See More</Text>
    </View>
  );
};

export default SeeMore;
