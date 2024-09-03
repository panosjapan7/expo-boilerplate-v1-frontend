// ./components/utils/Spacer.tsx
import React from "react";
import { View, ViewStyle } from "react-native";

type SpacerType = {
  marginHorizontal?: number;
  marginVertical?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
};

const Spacer: React.FC<SpacerType> = ({
  marginHorizontal,
  marginVertical,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  const style: ViewStyle = {
    marginHorizontal: marginHorizontal !== undefined ? marginHorizontal : 0,
    marginVertical: marginVertical !== undefined ? marginVertical : 0,
    marginTop: marginTop !== undefined ? marginTop : undefined,
    marginRight: marginRight !== undefined ? marginRight : undefined,
    marginBottom: marginBottom !== undefined ? marginBottom : undefined,
    marginLeft: marginLeft !== undefined ? marginLeft : undefined,
  };

  return <View style={style} />;
};

export default Spacer;
