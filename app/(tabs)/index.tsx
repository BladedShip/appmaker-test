import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderCarousel from "./_components/HeaderCarousel";
import { ScrollView } from "react-native-gesture-handler";
import Collapsible from "react-native-collapsible";
import Accordion from "./_components/Accordion";

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

export default function TabOneScreen() {
  const [selectedVariant, setSelectedVariant] = React.useState(colorVariants[0]);
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  return (
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
              A minimalist chair with a reversible back cushion provides soft support for your back
              and has two sides to wear.
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
            <Accordion
              title="Product Description"
              content="Choose a stylish dark color or brighten up your home with colorful sarongs. The EKERÖ armchair has a sleek and modern look with two sides that meet at the back – and a waist support for added comfort!"
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
