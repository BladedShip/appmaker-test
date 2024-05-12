import React from "react";
import { Pressable, View, useWindowDimensions, Image, Text } from "react-native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

type Props = {
  products: {
    id: number;
    img: any;
  }[];
};

const HeaderCarousel = ({ products }: Props) => {
  const windowWidth = useWindowDimensions().width;
  // const scrollOffsetValue = useSharedValue<number>(0);
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
    <View>
      <Carousel
        {...baseOptions}
        onSnapToItem={onScroll}
        ref={ref}
        // defaultScrollOffsetValue={scrollOffsetValue}
        style={{ width: "100%" }}
        data={products}
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
              source={products[index].img}
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
          bottom: 24,
          right: 0,
          left: 0,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
        }}
      >
        {products.map((_, index) => (
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
              source={products[index].img}
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
      <BestSeller />
    </View>
  );
};

const BestSeller = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 16,
        left: 0,
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          color: "white",
          backgroundColor: "#e14949",
          padding: 4,
          fontSize: 12,
          fontFamily: "Manrope_700Bold",
        }}
      >
        Best Seller
      </Text>
      <View>
        <View
          style={{
            width: 0,
            height: 0,
            borderLeftWidth: 25,
            borderBottomWidth: 25,
            // FIXME: Figure out border radius issue with banner end.
            borderStyle: "solid",
            backgroundColor: "transparent",
            borderLeftColor: "transparent",
            borderBottomColor: "#B24040",
            transform: [{ rotate: "90deg" }],
          }}
        />
        <View
          style={{
            position: "absolute",
            width: 0,
            height: 0,
            // FIXME: Figure out border radius issue with banner end.
            borderLeftWidth: 25,
            borderBottomWidth: 25,
            borderStyle: "solid",
            backgroundColor: "transparent",
            borderLeftColor: "transparent",
            borderBottomColor: "#E44A4AF0",
            transform: [{ rotate: "180deg" }],
          }}
        />
      </View>
    </View>
  );
};

export default HeaderCarousel;
