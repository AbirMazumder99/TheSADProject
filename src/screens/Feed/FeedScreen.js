import React from "react";
import {
  Image,
  Text,
  View,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import styles from "./styles";
import Carousel from "react-native-snap-carousel";
import SliderEntry from "react-native-snap-carousel/src/carousel/";

const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get("window");

const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2;
//Dummy
const ENTRIES = [
  {
    title: "Favourites landscapes 1",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/SsJmZ9jl.jpg",
  },
  {
    title: "Favourites landscapes 2",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/5tj6S7Ol.jpg",
  },
  {
    title: "Favourites landscapes 3",
    subtitle: "Lorem ipsum dolor sit amet et nuncat",
    illustration: "https://i.imgur.com/pmSqIFZl.jpg",
  },
  {
    title: "Favourites landscapes 4",
    subtitle: "Lorem ipsum dolor sit amet et nuncat mergitur",
    illustration: "https://i.imgur.com/cA8zoGel.jpg",
  },
  {
    title: "Favourites landscapes 5",
    subtitle: "Lorem ipsum dolor sit amet",
    illustration: "https://i.imgur.com/pewusMzl.jpg",
  },
  {
    title: "Favourites landscapes 6",
    subtitle: "Lorem ipsum dolor sit amet et nuncat",
    illustration: "https://i.imgur.com/l49aYS3l.jpg",
  },
];

export default function FeedScreen() {
  const _renderItem = ({ item, index }) => {
    return <SliderEntry data={item} even={false} />;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={"rgba(0, 0, 0, 0.3)"}
          barStyle={"light-content"}
        />
        <ScrollView
          style={styles.scrollview}
          scrollEventThrottle={200}
          directionalLockEnabled={true}
        >
          <View style={styles.exampleContainer}>
            <Text style={styles.title}>Michelle</Text>
            <Text style={styles.subtitle}>Student at USC</Text>
            <Carousel
              data={ENTRIES}
              renderItem={_renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              layout="tinder"
              loop={true}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
