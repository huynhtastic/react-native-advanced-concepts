import React, { useCallback, useRef } from "react";
import { Animated, Dimensions, View, PanResponder } from "react-native";
import { CardData } from "./types";

const SCREEN_WIDTH = Dimensions.get("window").width;

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
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {},
    })
  ).current;

  const getCardStyle = useCallback(() => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });

    return { ...position.getLayout(), transform: [{ rotate }] };
  }, [position]);

  const renderCards = useCallback(() => {
    return data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={getCardStyle()}
            {...panResponder.panHandlers}
          >
            {renderItem(item)}
          </Animated.View>
        );
      }

      return renderItem(item);
    });
  }, [renderItem, data]);

  return <View>{renderCards()}</View>;
};
