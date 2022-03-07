import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { Dimensions, ScrollView, Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { WelcomeTabsScreenProps } from "../../navigators/WelcomeTabs";

const SCREEN_WIDTH = Dimensions.get("window").width;
interface Props {
  data: { text: string; color: string }[];
}

export const Slides: React.FC<Props> = ({ data }) => {
  const { navigate } = useNavigation<WelcomeTabsScreenProps["navigation"]>();

  const renderLastSlide = useCallback(
    (index: number) => {
      if (index === data.length - 1) {
        return (
          <Button
            onPress={() => navigate("Auth")}
            buttonStyle={styles.buttonStyle}
            title="Onwards!"
          />
        );
      }
    },
    [data]
  );

  const renderSlides = useCallback(() => {
    return data.map((slide, index) => {
      return (
        <View
          style={[styles.slide, { backgroundColor: slide.color }]}
          key={slide.text}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
          {renderLastSlide(index)}
        </View>
      );
    });
  }, [data, renderLastSlide]);

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
    textAlign: "center",
  },
  slideText: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
  buttonStyle: {
    marginTop: 15,
  },
});
