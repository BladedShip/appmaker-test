import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Modal, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderCarousel from "./_components/HeaderCarousel";
import { ScrollView } from "react-native-gesture-handler";
import Accordion from "./_components/Accordion";
import { Link } from "expo-router";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  Easing,
  withTiming,
} from "react-native-reanimated";
import { FlashList } from "@shopify/flash-list";

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
    // Best case scenario
  },
];

const colorVariants = [
  {
    color: "#E3AD33",
    name: "Harvest Gold",
    id: 1,
  },
  {
    color: "#1A1919",
    name: "Eerie Black",
    id: 2,
  },
  {
    color: "#E35D33",
    name: "Flame",
    id: 3,
  },
  {
    color: "#1C3A13",
    name: "Pakistan Green",
    id: 4,
  },
];

const sizeProperties = [
  {
    name: "Width",
    value: "70 cm",
  },
  {
    name: "Depth",
    value: "73 cm",
  },
  {
    name: "Height",
    value: "75 cm",
  },
  {
    name: "Seat Width",
    value: "57 cm",
  },
  {
    name: "Seat Depth",
    value: "46 cm",
  },
  {
    name: "Seat Height",
    value: "43 cm",
  },
];

const frequentlyBought = [
  {
    id: 1,
    image: require("../../assets/images/carousel-1.png"),
    name: "EKERÖ",
    discount: "45% OFF",
    price: "$230.00",
    ogPrice: "$512.58",
    rating: 4.9,
    reviews: 256,
  },
  {
    id: 2,
    image: require("../../assets/images/carousel-2.png"),
    name: "STRANDMON",
    discount: "45% OFF",
    price: "$274.13",
    ogPrice: "$856.60",
    rating: 4.9,
    reviews: 256,
  },
  {
    id: 3,
    image: require("../../assets/images/carousel-3.png"),
    name: "PLATTLÄNS",
    discount: "45% OFF",
    price: "$24.99",
    ogPrice: "$69.99",
    rating: 4.9,
    reviews: 256,
  },
  {
    id: 4,
    image: require("../../assets/images/carousel-4.png"),
    name: "MALM",
    discount: "45% OFF",
    price: "$50.99",
    ogPrice: "$69.99",
    rating: 4.9,
    reviews: 256,
  },
];

export default function TabOneScreen() {
  const [selectedVariant, setSelectedVariant] = React.useState(colorVariants[0]);
  const [liked, setLiked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const scale = useSharedValue(1);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  const onPress = () => {
    scale.value = withTiming(1.2, { duration: 200, easing: Easing.ease }, () => {
      scale.value = withTiming(1, { duration: 200, easing: Easing.ease });
    });
    setLiked(!liked);
  };

  const handleAddToCart = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setModalVisible(true);
    }, 2000);
  };
  return (
    <>
      <ScrollView style={styles.container}>
        <SafeAreaView
          edges={[
            "bottom",
            "top",
            // Disable this to use the status bar area.
          ]}
          style={{ flex: 1 }}
        >
          <HeaderCarousel products={productImages} />
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              shadowColor: "#0000001A",
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 1,
              shadowRadius: 42,
              elevation: 8,
              marginTop: -16,
            }}
          >
            {/* Basic Product Info */}
            <View
              nativeID="product-basic-info"
              style={{
                flexDirection: "column",
                gap: 8,
                padding: 16,
              }}
            >
              <Text
                style={{
                  fontFamily: "Manrope_400Regular",
                  fontSize: 16,
                  textAlign: "left",
                }}
              >
                EKERÖ
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Manrope_800ExtraBold",
                    fontSize: 32,
                    textAlign: "left",
                  }}
                >
                  $230.00
                </Text>

                <Text
                  style={{
                    fontFamily: "Manrope_400Regular",
                    fontSize: 14,
                    textAlign: "left",
                    textDecorationLine: "line-through",
                    color: "#0000004D",
                    marginLeft: 8,
                  }}
                >
                  $512.58
                </Text>
                <View
                  style={{
                    backgroundColor: "#e14949",
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    paddingHorizontal: 6,
                    paddingVertical: 3,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 12,
                      fontFamily: "Manrope_700Bold",
                    }}
                  >
                    45% OFF
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: 8,
                }}
              >
                <Image
                  source={require("../../assets/images/star.png")}
                  style={{
                    width: 18,
                    height: 18,
                  }}
                />
                <Text
                  style={{
                    fontFamily: "Manrope_400Regular",
                    fontSize: 12,
                    textAlign: "left",
                    marginTop: 2,
                  }}
                >{`4.9 (256)`}</Text>
              </View>
              <Text
                style={{
                  fontFamily: "Manrope_400Regular",
                  fontSize: 16,
                  textAlign: "left",
                  lineHeight: 19.2,
                }}
              >
                A minimalist chair with a reversible back cushion provides soft support for your
                back and has two sides to wear.
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: "#E0E0E0",
                borderBottomWidth: 1,
              }}
            />
            {/* Color Selector */}
            <View
              style={{
                padding: 16,
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Text
                style={{
                  fontFamily: "Manrope_700Bold",
                  fontSize: 18,
                  textAlign: "left",
                }}
              >
                Colors
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {colorVariants.map((color, index) => (
                  <Pressable
                    key={color.id}
                    onPress={() => setSelectedVariant(color)}
                    style={{
                      width: "50%",
                      paddingVertical: 8,
                      paddingRight: index % 2 === 0 ? 8 : 0,
                      paddingLeft: index % 2 === 1 ? 8 : 0,
                    }}
                  >
                    <View
                      key={color.id}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        width: "100%",
                        gap: 8,
                        padding: 8,
                        borderColor: selectedVariant.id === color.id ? "#156651" : "#E0E0E0",
                        borderWidth: 1,
                        borderRadius: 8,
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: color.color,
                          width: 35,
                          height: 35,
                          borderRadius: 5,
                        }}
                      />
                      <Text
                        style={{
                          fontFamily: "Manrope_400Regular",
                          fontSize: 14,
                          textAlign: "left",
                        }}
                      >
                        {color.name}
                      </Text>
                    </View>
                  </Pressable>
                ))}
              </View>
            </View>
            <View
              style={{
                borderBottomColor: "#E0E0E0",
                borderBottomWidth: 1,
              }}
            />
            {/* Description Accordion */}
            <View
              style={{
                padding: 16,
              }}
            >
              <Accordion title="Product Description">
                <Text
                  style={{
                    fontFamily: "Manrope_400Regular",
                    fontSize: 14,
                    lineHeight: 19.12,
                    letterSpacing: -0.3,
                    textAlign: "left",
                  }}
                >
                  Choose a stylish dark color or brighten up your home with colorful sarongs. The
                  EKERÖ armchair has a sleek and modern look with two sides that meet at the back –
                  and a waist support for added comfort!
                </Text>
              </Accordion>
            </View>
            <View
              style={{
                borderBottomColor: "#E0E0E0",
                borderBottomWidth: 1,
              }}
            />
            {/* Size Accordion */}
            <View
              style={{
                padding: 16,
              }}
            >
              <Accordion title="Size">
                <View
                  style={{
                    gap: 8,
                  }}
                >
                  {sizeProperties.map((size, index) => (
                    <>
                      <View
                        key={index}
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "Manrope_500Medium",
                            fontSize: 14,
                          }}
                        >
                          {size.name}
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Manrope_500Medium",
                            fontSize: 14,
                            textAlign: "right",
                          }}
                        >
                          {size.value}
                        </Text>
                      </View>
                      <View
                        style={{
                          borderBottomColor: "#E0E0E0",
                          borderBottomWidth: index === sizeProperties.length - 1 ? 0 : 1,
                        }}
                      />
                    </>
                  ))}
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../../assets/images/schematic.png")}
                      style={{
                        width: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </View>
                </View>
              </Accordion>
            </View>
            {/* Frequently Bought Section */}
            <View
              style={{
                gap: 16,
              }}
            >
              <View
                style={{
                  padding: 16,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    fontFamily: "Manrope_700Bold",
                    fontSize: 20,
                    textAlign: "left",
                  }}
                >
                  Frequently bought
                </Text>

                <Link href="/more">
                  <Text
                    style={{
                      fontFamily: "Manrope_400Regular",
                      fontSize: 14,
                      color: "#156651",
                      textAlign: "right",
                      textDecorationLine: "underline",
                    }}
                  >
                    See More
                  </Text>
                </Link>
              </View>
              <View
                style={{
                  shadowColor: "#0000001A",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 1,
                  shadowRadius: 24,
                  elevation: 2,
                  paddingBottom: 32,
                }}
              >
                <FlashList
                  contentContainerStyle={{
                    paddingHorizontal: 8,
                  }}
                  data={frequentlyBought}
                  horizontal
                  renderItem={({ item }) => (
                    <View
                      style={{
                        padding: 16,
                        borderRadius: 14,
                        gap: 10,
                        backgroundColor: "white",
                        marginHorizontal: 8,
                      }}
                    >
                      <View
                        style={{
                          position: "relative",
                          width: 120,
                          height: 120,
                        }}
                      >
                        <Image
                          source={item.image}
                          style={{
                            width: 120,
                            height: 120,
                            borderRadius: 10,
                          }}
                        />
                        <View
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            backgroundColor: "#e14949",
                            borderBottomRightRadius: 10,
                            borderTopLeftRadius: 10,
                            paddingHorizontal: 6,
                            paddingVertical: 3,
                          }}
                        >
                          <Text
                            style={{
                              color: "white",
                              fontSize: 10,
                              fontFamily: "Manrope_700Bold",
                            }}
                          >
                            {item.discount}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          gap: 4,
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "Manrope_400Regular",
                            fontSize: 14,
                            textAlign: "left",
                          }}
                        >
                          {item.name}
                        </Text>
                        <View>
                          <Text
                            style={{
                              fontFamily: "Manrope_700Bold",
                              fontSize: 20,
                              textAlign: "left",
                            }}
                          >
                            {item.price}
                          </Text>
                          <Text
                            style={{
                              fontFamily: "Manrope_400Regular",
                              fontSize: 12,
                              textAlign: "left",
                              textDecorationLine: "line-through",
                              color: "#0000004D",
                            }}
                          >
                            {item.ogPrice}
                          </Text>
                        </View>
                        <Text>
                          <Image
                            source={require("../../assets/images/star.png")}
                            style={{
                              width: 18,
                              height: 18,
                            }}
                          />
                          <Text
                            style={{
                              fontFamily: "Manrope_400Regular",
                              fontSize: 12,
                              textAlign: "left",
                              marginTop: 2,
                            }}
                          >{` ${item.rating} (${item.reviews})`}</Text>
                        </Text>
                      </View>
                    </View>
                  )}
                  estimatedItemSize={5}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 12,
              borderTopRightRadius: 14,
              borderTopLeftRadius: 14,
              backgroundColor: "white",
              marginTop: -16,
              flexDirection: "row",
            }}
          >
            <Pressable
              style={{
                height: 44,
                width: 44,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#156651",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={onPress}
            >
              <Animated.Image
                source={
                  liked
                    ? require("../../assets/images/liked.png")
                    : require("../../assets/images/unliked.png")
                }
                style={[
                  {
                    width: 20,
                    height: 20,
                  },
                  animatedStyles,
                ]}
              />
            </Pressable>
            <Pressable
              style={{
                flex: 1,
                height: 44,
                borderRadius: 8,
                backgroundColor: "#156651",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 16,
              }}
              onPress={handleAddToCart}
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text
                  style={{
                    color: "white",
                    fontFamily: "Manrope_700Bold",
                    fontSize: 16,
                  }}
                >
                  Add to Cart
                </Text>
              )}
            </Pressable>
          </View>
        </SafeAreaView>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: "80%",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "Manrope_700Bold",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Item added to cart!
            </Text>
            <Pressable
              style={{ marginTop: 10, backgroundColor: "#156651", padding: 10, borderRadius: 5 }}
              onPress={() => setModalVisible(false)}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "Manrope_700Bold",
                  fontSize: 16,
                  textAlign: "center",
                }}
              >
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
