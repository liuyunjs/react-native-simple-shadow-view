import React from 'react';
import {
  requireNativeComponent,
  View,
  ViewProps,
  StyleSheet,
} from 'react-native';

const RNTShadowView = requireNativeComponent('RNTShadowView');

export const ShadowView = React.forwardRef<View, ViewProps>((props, ref) => {
  const { style } = props;

  const flattenedStyle = StyleSheet.flatten(style);

  const {
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    borderRadius,
    backgroundColor,
    borderWidth,
    borderColor,
  } = flattenedStyle;

  if (!shadowRadius || shadowOpacity === 0) {
    return <View {...props} ref={ref} />;
  }

  const { width: shadowOffsetX, height: shadowOffsetY } = shadowOffset || {};
  return (
    <RNTShadowView
      {...props}
      // @ts-ignore
      style={flattenedStyle}
      ref={ref}
      borderWidth={borderWidth}
      borderColor={borderColor !== undefined ? borderColor : 'black'}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      shadowColor={shadowColor !== undefined ? shadowColor : 'black'}
      shadowOffsetX={shadowOffsetX}
      shadowOffsetY={shadowOffsetY}
      shadowOpacity={shadowOpacity !== undefined ? shadowOpacity : 0}
      shadowRadius={shadowRadius}
    />
  );
});
