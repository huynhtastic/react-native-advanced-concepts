import React, { useCallback, useMemo, useRef, useState } from "react";
import { Animated, Dimensions, View, PanResponder } from "react-native";
import { CardData } from "./types";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

interface Props {
  renderItem: (item: CardData) => React.ReactElement;
  data: CardData[];
  onSwipeRight?: (item: CardData) => void;
  onSwipeLeft?: (item: CardData) => void;
}

export const Deck: React.FC<Props> = ({
  renderItem,
  data,
  onSwipeLeft = () => {},
  onSwipeRight = () => {},
}) => {
  const [index, setIndex] = useState(0);
  const position = useRef(new Animated.ValueXY()).current;

  const onSwipeComplete = useCallback(
    (direction: "right" | "left") => {
      const item = data[index];

      direction === "right" ? onSwipeRight(item) : onSwipeLeft(item);
      setIndex(index + 1);
      position.setValue({ x: 0, y: 0 });
    },
    [data, index, onSwipeLeft, onSwipeRight, position]
  );

  const forceSwipe = useCallback(
    (direction: "right" | "left") => {
      const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
      Animated.timing(position, {
        toValue: { x, y: 0 },
        duration: 250,
        useNativeDriver: false,
      }).start(() => onSwipeComplete(direction));
    },
    [onSwipeComplete, position]
  );

  const resetPosition = useCallback(() => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  }, [position]);

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => {
          return true;
        },
        onPanResponderMove: (event, gesture) => {
          position.setValue({ x: gesture.dx, y: gesture.dy });
        },
        onPanResponderRelease: (event, gesture) => {
          if (gesture.dx > SWIPE_THRESHOLD) {
            forceSwipe("right");
          } else if (gesture.dx < -SWIPE_THRESHOLD) {
            forceSwipe("left");
          } else {
            resetPosition();
          }
        },
      }),
    [forceSwipe, position, resetPosition]
  );

  const getCardStyle = useCallback(() => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });

    return { ...position.getLayout(), transform: [{ rotate }] };
  }, [position]);

  const renderCards = useCallback(() => {
    return data.map((item, i) => {
      if (i < index) {
        return null;
      } else if (i === index) {
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
  }, [renderItem, data, index, getCardStyle, panResponder.panHandlers]);

  return <View>{renderCards()}</View>;
};
