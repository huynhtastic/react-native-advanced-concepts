import React, { useCallback, useRef } from "react";
import { Animated, View, PanResponder } from "react-native";
import { CardData } from "./types";

interface Props {
  renderItem: (item: CardData) => React.ReactElement;
  data: CardData[];
}

export const Deck: React.FC<Props> = ({ renderItem, data, ...props }) => {
  const position = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => {
        return true;
      },
      onPanResponderMove: (event, gesture) => {
        position.setValue({x: gesture.dx, y: gesture.dy})
      },
      onPanResponderRelease: () => {},
    })
  ).current;

  const renderCards = useCallback(() => {
    return data.map(renderItem);
  }, [renderItem, data]);

  return (
      <Animated.View style={position.getLayout()} {...panResponder.panHandlers}>{renderCards()}</Animated.View>
  );
};
