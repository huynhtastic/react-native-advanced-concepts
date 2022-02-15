import React, { useCallback } from "react";
import { Animated, View } from "react-native";
import { CardData } from "./types";

interface Props {
  renderItem: (item: CardData) => React.ReactElement;
  data: CardData[];
}

export const Deck: React.FC<Props> = ({ renderItem, data, ...props }) => {
  const renderCards = useCallback(() => {
    return data.map(renderItem);
  }, [renderItem, data]);

  return <View>{renderCards()}</View>;
};
