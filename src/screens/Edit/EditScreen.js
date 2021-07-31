import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
// import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";
import styles from "./styles";
import * as ImagePicker from "expo-image-picker";
import { Avatar } from "react-native-paper";

export default function SettingsScreen() {
  const [lookingFor, setlookingFor] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [location, setLocation] = useState("");
  const [requirements, setRequirements] = useState("");
  const [ethnicity, setEthnicity] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [hobbies, setHobbies] = useState("");

  const [images, setImages] = useState([]);
  const imageList = [
    // "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE",
  ];
  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== "web") {
  //       const { status } =
  //         await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== "granted") {
  //         alert("Sorry, we need camera roll permissions to make this work!");
  //       }
  //     }
  //   })();
  // }, []);

  const checkForCameraRollPermission = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert(
        "Please grant camera roll permissions inside your system's settings"
      );
      return false;
    } else {
      console.log("Media Permissions are granted");
      return true;
    }
  };

  const pickImage = async () => {
    if (checkForCameraRollPermission) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
        imageList.push(result.uri);
        setImages(imageList);
      }
    }
  };
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const onImageUpload = () => {
    console.log("upload");
  };
  const onImageUpdate = () => {
    console.log("update");
  };
  const onImageRemove = () => {
    console.log("remove");
  };

  const removeImage = async () => {
    console.log("REMOVE");
  };
  return (
    <ScrollView contentContainerStyle={styles.stage}>
      <View style={styles.imageContainer}>
        {/* <Button title="Add" onPress={onImageUpload} />
        {imageList.map((image, index) => (
          <View key={index}>
            <Image source={{ uri: image.data_url }} />
            <View>
              <Button title="Update" onPress={() => onImageUpdate(index)} />
              <Button title="Remove" onPress={() => onImageRemove(index)} />
            </View>
          </View>
        ))} */}
        {/* UPLOAD AVATAR */}
        <View style={styles.uploadItem}>
          <TouchableOpacity onPress={pickImage}>
            <Avatar.Icon
              style={{ backgroundColor: "lightgray" }}
              size={65}
              icon="camera"
            />
          </TouchableOpacity>
        </View>

        <FlatList
          // numColumns={3}
          data={images}
          // keyExtractor={(item, index) => item.key}
          renderItem={({ item, index }) => (
            // <Image source={{ uri: item }} style={styles.imageItem} />
            <View style={styles.imageItem}>
              <Image source={{ uri: item }} />

              <TouchableOpacity
                style={{ alignSelf: "flex-end" }}
                onPress={removeImage}
              >
                <Avatar.Icon
                  onPress={removeImage}
                  style={{ backgroundColor: "red" }}
                  size={25}
                  icon="close"
                />
              </TouchableOpacity>
            </View>
          )}
        />
        {/* {image ? (
            <Image source={{ uri: image }} style={styles.imageItem} />
          ) : (
            <Avatar.Icon
              style={{ backgroundColor: "lightgray" }}
              size={65}
              icon="camera"
            />
          )} */}

        {/* <Image
          style={styles.imageItem}
          source={require("../../../assets/abir.jpg")}
        />
        <Image
          style={styles.imageItem}
          source={require("../../../assets/abir.jpg")}
        />
        <Image
          style={styles.imageItem}
          source={require("../../../assets/abir.jpg")}
        />
        <Image
          style={styles.imageItem}
          source={require("../../../assets/abir.jpg")}
        />
        <Image
          style={styles.imageItem}
          source={require("../../../assets/abir.jpg")}
        />
        <Image
          style={styles.imageItem}
          source={require("../../../assets/abir.jpg")}
        /> */}
      </View>
      <TextInput
        mode="outlined"
        label="Name"
        multiline
        placeholder="Mr. Sunshine"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        mode="outlined"
        label="Age"
        multiline
        placeholder="just a number..."
        onChangeText={(text) => setAge(text)}
        value={age}
      />
      <TextInput
        mode="outlined"
        label="Height"
        multiline
        placeholder="just a number..."
        onChangeText={(text) => setHeight(text)}
        value={height}
      />
      <TextInput
        mode="outlined"
        label="Location"
        multiline
        placeholder="Your Heart"
        onChangeText={(text) => setLocation(text)}
        value={location}
      />
      <TextInput
        mode="outlined"
        label="Ethnicity"
        multiline
        placeholder="Asian...."
        onChangeText={(text) => setEthnicity(text)}
        value={ethnicity}
      />
      <TextInput
        mode="outlined"
        label="Language(s)"
        multiline
        placeholder="Polyglot hehe"
        onChangeText={(text) => setLanguage(text)}
        value={language}
      />
      <TextInput
        mode="outlined"
        label="Hobbies"
        multiline
        placeholder="Buying all that boba..."
        onChangeText={(text) => setHobbies(text)}
        value={hobbies}
      />
      <TextInput
        mode="outlined"
        label="Looking for"
        multiline
        placeholder="the matcha to my latte"
        onChangeText={(text) => setlookingFor(text)}
        value={lookingFor}
      />
      <TextInput
        mode="outlined"
        label="Pros"
        multiline
        placeholder="can cook any meal for u. The Ultimate Cheffff"
        onChangeText={(text) => setPros(text)}
        value={pros}
      />
      <TextInput
        mode="outlined"
        label="Cons"
        multiline
        placeholder="What are cons even...."
        onChangeText={(text) => setCons(text)}
        value={cons}
      />
      <TextInput
        mode="outlined"
        label="Requirements"
        multiline
        placeholder="Your Smile :)"
        onChangeText={(text) => setRequirements(text)}
        value={requirements}
      />
    </ScrollView>
  );
}
