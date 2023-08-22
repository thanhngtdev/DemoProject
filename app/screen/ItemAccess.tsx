import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import Animated, { Easing, FadeOutUp, SlideInUp } from 'react-native-reanimated';

interface IItem {
  id: number;
  name: string;
  isSelected: boolean;
  indexAdd: number;
}

interface IProps {
  item: IItem;
  onPress: (item: IItem) => void;
}

export const ItemAccess = (props: IProps) => {
  const { item, onPress } = props;

  if (item.isSelected) {
    return null;
  }

  return (
    <Animated.View style={styles.container}
      entering={SlideInUp.duration(200).withInitialValues({ originY: -15, originX: -10 })}
      exiting={FadeOutUp.duration(200).easing(Easing.bounce)}
    >
      <Text>GGGWPP</Text>
      {item.isSelected ? null : <TouchableOpacity style={styles.itemEach} activeOpacity={0.8} onPress={() => {onPress(item) }}>
          <Text style={{ flex: 1 }}>{item.name}</Text>
        </TouchableOpacity>
      }
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12
  },
  itemEach: {
    height: 50,
    width: Dimensions.get('screen').width - 32,
    margin: 8,
    backgroundColor: 'gray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 12,
  },
});
