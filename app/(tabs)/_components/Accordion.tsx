import React from "react";
import { Pressable, View, Text } from "react-native";
import Collapsible from "react-native-collapsible";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

type Props = {
  title: string;
  content: string;
};

const Accordion = (props: Props) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const rotation = useSharedValue(isCollapsed ? 0 : 1);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value * -180 + 180}deg` }],
    };
  });

  React.useEffect(() => {
    rotation.value = withTiming(isCollapsed ? 0 : 1, { duration: 500 });
  }, [isCollapsed]);
  return (
    <Pressable
      onPress={() => setIsCollapsed(!isCollapsed)}
      style={{
        gap: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "Manrope_700Bold",
            fontSize: 18,
            lineHeight: 24.59,
            letterSpacing: -0.3,
            textAlign: "left",
          }}
        >
          {props.title}
        </Text>
        <Animated.Image
          source={require("../../../assets/images/arrow.png")}
          style={[
            {
              width: 20,
              height: 20,
            },
            animatedStyles,
          ]}
        />
      </View>
      <Collapsible collapsed={isCollapsed}>
        <Text
          style={{
            fontFamily: "Manrope_400Regular",
            fontSize: 14,
            lineHeight: 19.12,
            letterSpacing: -0.3,
            textAlign: "left",
          }}
        >
          {props.content}
        </Text>
      </Collapsible>
    </Pressable>
  );
};

export default Accordion;
