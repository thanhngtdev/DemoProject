
import React, { useCallback, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, { Easing, FadeIn, FadeOut } from 'react-native-reanimated';
import { ItemAccess } from './ItemAccess'
const AccessWrapper = () => {
  const [arrList, setArrList] = useState(
    [
      {
        id: 1,
        name: 'test 1',
        isSelected: false,
        indexAdd: 10000,
      },
      {
        id: 2,
        name: 'test 2',
        isSelected: false,
        indexAdd: 10000,
      },
      {
        id: 3,
        name: 'test 3',
        isSelected: false,
        indexAdd: 10000,
      },
      {
        id: 4,
        name: 'test 4',
        isSelected: false,
        indexAdd: 10000,
      },
      {
        id: 5,
        name: 'test 5',
        isSelected: false,
        indexAdd: 10000,
      },
    ]
  );

  const handleOnPressItem = useCallback((item) => {
    try {
      let arr = [...arrList];
      const findIndex = arr.findIndex((x) => x.id === item.id);
      if (findIndex > -1) {
        arr[findIndex].isSelected = true;
        arr[findIndex].indexAdd = arrList.filter((x) => x.isSelected).length + 1;
      }
      setArrList(arr);
    } catch (error) {
      console.log('eee', error);
    }
  }, [arrList]);

  const onPressItemHeader = useCallback((item) => {
    try {
      let arr = [...arrList];
      const findIndex = arr.findIndex((x) => x.id === item.id);
      if (findIndex > -1) {
        arr[findIndex].isSelected = false;
      }
      for (let index = 0; index < arr.sort((a, b) => {
        if (a.indexAdd - b.indexAdd === 0) {
          return a.id - b.id;
        }
        return a.indexAdd - b.indexAdd;
      }).length; index++) {
        if (arr[index].isSelected) {
          arr[index].indexAdd = index + 1;
        } else {
          arr[index].indexAdd = 10000;
        }
      }
      setArrList(arr);
    } catch (error) {
    }
  }, [arrList]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={arrList}
        extraData={arrList}
        ListHeaderComponent={() => {
          return <View style={styles.headerContainer}>
              {arrList.sort((a, b) => {
                if (a.indexAdd - b.indexAdd === 0) {
                  return a.id - b.id;
                }
                return a.indexAdd - b.indexAdd;
              }).map((item) => {
                if (item.isSelected) {
                  return (
                    <Animated.View
                      entering={FadeIn.springify().duration(500).easing(Easing.ease)} exiting={FadeOut.springify().easing(Easing.ease)}>
                      <TouchableOpacity
                        style={styles.itemHeader}
                        activeOpacity={0.8}
                        onPress={() => {
                          onPressItemHeader(item);
                        }}>
                        <Text style={{ textAlign: 'center' }}>{item.name}</Text>
                      </TouchableOpacity>
                    </Animated.View>
                  );
                }
                return <View style={{ height: 50, width: 50, borderRadius: 20, borderWidth: 1, margin: 8 }} />
              })}
            </View>
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <ItemAccess item={item} onPress={(item) => handleOnPressItem(item)} />
        }}
      />
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemHeader: {
    height: 48,
    width: 48,
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 8
  },
});

export default AccessWrapper;
