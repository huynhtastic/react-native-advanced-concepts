import React, { useCallback, useRef } from "react";
import { Animated, View, PanResponder } from "react-native";
import { CardData } from "./types";

interface Props {
  renderItem: (item: CardData) => React.ReactElement;
  data: CardData[];
}

export const Deck: React.FC<Props> = ({ renderItem, data, ...props }) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => {
        return true;
      },
      onPanResponderMove: (event, gesture) => {
        console.log(gesture);
      },
      onPanResponderRelease: () => {},
    })
  ).current;

  const renderCards = useCallback(() => {
    return data.map(renderItem);
  }, [renderItem, data]);

  return <View>{renderCards()}</View>;
};
