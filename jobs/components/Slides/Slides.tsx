import React, { useCallback } from "react";
import { Dimensions, ScrollView, Text, View, StyleSheet } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
interface Props {
  data: { text: string; color: string }[];
}

export const Slides: React.FC<Props> = ({ data }) => {
  const renderSlides = useCallback(() => {
    return data.map((slide) => {
      return (
        <View
          style={[styles.slide, { backgroundColor: slide.color }]}
          key={slide.text}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
        </View>
      );
    });
  }, [data]);

  return (
    <ScrollView pagingEnabled horizontal style={{ minHeight: "100%" }}>
      {renderSlides()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
  slideText: {
    fontSize: 30,
    color: "white",
  },
});
