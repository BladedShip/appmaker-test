import React from "react";
import { StyleSheet, View, Text, useWindowDimensions, Image, Pressable } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

const productImages = [
  {
    id: 1,
    img: require("../../assets/images/product-header-1.png"),
  },
  {
    id: 2,
    img: require("../../assets/images/product-header-2.png"),
  },
  {
    id: 3,
    img: require("../../assets/images/product-header-3.png"),
  },
];

export default function TabOneScreen() {
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue<number>(0);
  const [isVertical, setIsVertical] = React.useState(false);
  const ref = React.useRef<ICarouselInstance>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const onScroll = React.useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  const PAGE_WIDTH = windowWidth;
  const baseOptions = isVertical
    ? ({
        vertical: true,
        width: windowWidth,
        height: PAGE_WIDTH / 1,
      } as const)
    : ({
        vertical: false,
        width: windowWidth,
        height: PAGE_WIDTH / 1,
      } as const);
  return (
    <View style={styles.container}>
      <SafeAreaView edges={["bottom", "top"]} style={{ flex: 1 }}>
        <View>
          <Carousel
            {...baseOptions}
            onSnapToItem={onScroll}
            ref={ref}
            defaultScrollOffsetValue={scrollOffsetValue}
            style={{ width: "100%" }}
            data={productImages}
            renderItem={({ index }) => (
              <View
                key={index}
                style={{
                  width: "100%",
                  height: "100%",
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={productImages[index].img}
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                  }}
                />
              </View>
            )}
          />
          <View
            style={{
              position: "absolute",
              bottom: 4,
              right: 0,
              left: 0,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
            }}
          >
            {productImages.map((_, index) => (
              <Pressable
                onPress={() => {
                  ref.current?.scrollTo({
                    index,
                    animated: true,
                  });
                }}
                key={index}
              >
                <Image
                  source={productImages[index].img}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 10,
                    margin: 5,
                    borderColor: currentImageIndex === index ? "#156651" : "transparent",
                    backgroundColor: "white",
                    borderWidth: 2,
                  }}
                />
              </Pressable>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
