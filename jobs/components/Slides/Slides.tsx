import React, { useCallback } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

interface Props {
  data: { text: string }[];
}

export const Slides: React.FC<Props> = ({ data }) => {
  const renderSlides = useCallback(() => {
    return data.map((slide) => {
      return (
        <View style={styles.slide} key={slide.text}>
          <Text style={styles.slideText}>{slide.text}</Text>
        </View>
      );
    });
  }, [data]);

  return (
    <ScrollView horizontal style={{ minHeight: "100%" }}>
      {renderSlides()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slideText: {
    fontSize: 30,
  },
});
