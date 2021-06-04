import { firebase } from "../../firebase/config";

export default function usePhoto() {
  // to create the photos DB for a user first time
  const photoRef = firebase.firestore().collection("photos");

  const createAlbum = (uid) => {
    const data = {
      id: uid,
      photos: [],
      profilePic: null,
    };
    photoRef
      .doc(uid)
      .set(data)
      .then(() => {
        // navigation.navigate('Home', {user: data})
      })
      .catch((error) => {
        alert(error);
      });
  };

  // getAll for
  const getPhotos = (uid) => {
    photoRef
      .doc(uid)
      .get()
      .then((res) => res.photos)
      .catch((error) => {
        alert(error);
      });
  };

  const addPhoto = (uid, photo) => {
    const pictures = getPhotos(uid);
    pictures.push(photo);
    photoRef
      .doc(uid)
      .update({ photos: pictures })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };

  return {
    getPhotos,
    setProPic,
    addPhoto,
    removePic,
    createAlbum,
  };
}
