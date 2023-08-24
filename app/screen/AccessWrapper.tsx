
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Image, Dimensions, StyleSheet, Text, View, Animated, FlatList, SafeAreaView } from 'react-native';
// import Animated from 'react-native-reanimated';

const data = [
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 1 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 2 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 3 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 4 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 5 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 6 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 1 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 1 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 1 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 1 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 1 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 1 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 1 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 1 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 1 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 1 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },
  {
    image: 'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1531451526/180712-Weill--The-Creator-of-Pepe-hero_uionjj',
    title: 'Test 1 Test 1 Test 1 Test 1 Test 1 Test 1 Test 1',
    money: '100000VND'
  },

]

const AccessWrapper = () => {
  const refFlatList = useRef<FlatList>(null)
  const scrollY = React.useRef(new Animated.Value(0)).current
  const itemHeight = 100;

  return (
    <SafeAreaView>

      <Animated.FlatList
        data={data}
        ref={refFlatList}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        onScrollEndDrag={eve => {
          const heightItemOffset = `0.${(eve.nativeEvent.contentOffset.y / (itemHeight + 24)).toString().split('.')[1]
            }`;
          eve.nativeEvent.contentOffset.y + (itemHeight + 24) * (1 - Number(heightItemOffset))
          if (eve.nativeEvent.contentOffset.y / itemHeight > 0 && eve.nativeEvent.velocity.y > 0) {
            refFlatList.current?.scrollToOffset({
              animated: true,
              offset: eve.nativeEvent.contentOffset.y + itemHeight * (1 - Number(heightItemOffset)),
            });
          }
        }}
        contentContainerStyle={{ paddingBottom: 48 }}
        renderItem={({ item, index }) => {
          let activeOpacity = 1;
          let scaleX = 1;
          let scaleY = 1;

          if (index >= 4) {
            const inputRange = [
              itemHeight * (index - 4),
              (itemHeight * (index - 2)),
              (itemHeight * (index)),
            ]
            activeOpacity = scrollY.interpolate({
              inputRange, outputRange: [0, 1, 1]
            })

            scaleX = scrollY.interpolate({
              inputRange,
              outputRange: [0, 1, 1],
            })
            scaleY = scrollY.interpolate({
              inputRange,
              outputRange: [-Dimensions.get('screen').width / 2, 0, 0]
            })
          }

          return <View style={{
            width: '100%', alignSelf: 'flex-start',
            alightItem: 'flex-start',
            justifyContent: 'flex-start',
            backgroundColor: 'yellow'
          }}>
            <Animated.View
              style={[styles.container, {
                opacity: activeOpacity,
                transform: [{ scaleX: scaleX, }, { translateX: scaleY }]
              },]}>
              <Image
                source={{ uri: item?.image }}
                style={{ aspectRatio: 80 / 80, borderRadius: 12 }}
              />
              <View style={styles.itemRight}>
                <Text style={{ paddingVertical: 12, paddingHorizontal: 12, fontSize: 16 }}>{item?.title}</Text>
                <Text style={{ paddingVertical: 12, paddingHorizontal: 12, fontSize: 16 }}>{item?.money}</Text>
              </View>
            </Animated.View>
          </View>
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 18,
    flexDirection: 'row',
    height: 100,
    borderRadius: 12,
    shadowColor: '#083070',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2.5,
    alightSelf: 'flex-start',
    alightItem: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%'
  },
  image: {

  },
  itemRight: {
    flexShrink: 1
  }
});

export default AccessWrapper;
