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
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {},
    })
  ).current;

  const getCardStyle = useCallback(() => {
    return {...position.getLayout(),
    transform: [{ rotate: '45deg'}],
    };
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
