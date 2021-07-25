import React from "react";
import { Image, Text, View, SafeAreaView, Dimensions } from "react-native";
import styles from "./styles";
import Carousel from "react-native-snap-carousel";
import TinderCards from "./Cards/TinderCards";
import SwipeButtons from "./Swipe/SwipeButtons";
import * as dim from "../../static/constants/dimConst";

const SLIDER_WIDTH = Dimensions.get("window").width;
const SLIDER_HEIGHT = Dimensions.get("window").height;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * dim.WIDTH_PERCENT);
const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * dim.HEIGHT_PERCENT);

//Dummy
// const ENTRIES = [
//   {
//     title: "Favourites landscapes 1",
//     subtitle: "Lorem ipsum dolor sit amet",
//     illustration: "https://i.imgur.com/SsJmZ9jl.jpg",
//   },
//   {
//     title: "Favourites landscapes 2",
//     subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
//     illustration: "https://i.imgur.com/5tj6S7Ol.jpg",
//   },
//   {
//     title: "Favourites landscapes 3",
//     subtitle: "Lorem ipsum dolor sit amet et nuncat",
//     illustration: "https://i.imgur.com/pmSqIFZl.jpg",
//   },
//   {
//     title: "Favourites landscapes 4",
//     subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
//     illustration: "https://i.imgur.com/cA8zoGel.jpg",
//   },
//   {
//     title: "Favourites landscapes 5",
//     subtitle: "Lorem ipsum dolor sit amet",
//     illustration: "https://i.imgur.com/pewusMzl.jpg",
//   },
//   {
//     title: "Favourites landscapes 6",
//     subtitle: "Lorem ipsum dolor sit amet et nuncat",
//     illustration: "https://i.imgur.com/l49aYS3l.jpg",
//   },
// ];

export default function FeedScreen() {
  // const _renderItem = ({ item, index }) => {
  //   return (
  //     <View style={styles.slide}>
  //       <Text style={styles.title}>{item.title}</Text>
  //       <Text style={styles.subtitle}>{item.subtitle}</Text>
  //       <Image
  //         source={{ uri: item.illustration }}
  //         style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT }}
  //       ></Image>
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TinderCards />

        {/* <Carousel
          data={ENTRIES}
          renderItem={_renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          itemHeight={ITEM_HEIGHT}
          layout="tinder"
          loop={true}
          // swipeThreshold={3}
          // enableMomentum
        /> */}
        <SwipeButtons />
      </View>
    </SafeAreaView>
  );
}
