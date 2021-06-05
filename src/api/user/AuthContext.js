/* eslint-disable no-alert */
import React, { useContext, useState, useEffect } from "react";
import { firebase, db } from "../../firebase/config";
import * as fbCollections from "../../static/constants/firebaseConst";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// TODO: Make cloud function to verify stores don't already exist
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(true);
  const [currentStoreState, setCurrentStoreState] = useState();
  //   const storeRef = firebase.firestore().collection(fbCollections.STORES);

  const getCurrentStore = () => ({ ...currentStoreState });

  const setCurrentStore = (storeName) => {
    const items = [];
    db.collection(`${fbCollections.STORES}/${storeName}/${fbCollections.ITEMS}`)
      .get()
      .then((snap) => {
        snap.forEach((item) => {
          items.push(item.data());
        });
      });
    storeRef
      .doc(storeName)
      .get()
      .then((storeSnap) => {
        setCurrentStoreState({ ...storeSnap.data(), items });
      })
      .catch((error) => {
        alert(error);
      });
  };

  const itemsWithoutItem = (item) => {
    const { items } = getCurrentStore();
    const newItems = items.filter((curr) => curr.id !== item.id);
    return newItems;
  };

  const addItemToStore = (item) => {
    if (currentUser.uid !== getCurrentStore().admin) return;
    setCurrentStoreState({
      ...getCurrentStore(),
      items: [...itemsWithoutItem(item), item],
    });
  };

  const removeItemFromStore = (item) => {
    if (currentUser.uid !== getCurrentStore().admin) return;
    setCurrentStoreState({
      ...getCurrentStore(),
      items: itemsWithoutItem(item),
    });
  };

  ////////////////////////////////////////
  //  AUTHENTICATION
  ///////////////////////////////////////
  async function signup(email, password, confirmPassword, fullName, avatar) {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const { uid } = response.user;
        const data = {
          id: uid,
          email,
          fullName,
          avatar,
        };
        const usersRef = firebase.firestore().collection(fbCollections.USERS);
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {})
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function login(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  async function logout() {
    return firebase.auth().signOut();
  }

  async function remove() {
    return firebase.auth().currentUser.delete();
  }

  async function resetPassword(email) {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  async function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  async function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
        const userSnap = await firebase
          .firestore()
          .doc(`users/${user.uid}`)
          .get();
        setUserData(userSnap.data());
        setLoading(false);
        // if (userSnap.get("accountType") === accountTypes.STORE) {
        //   setCurrentStore(userSnap.get("fullName"));
        // }
      } else {
        setCurrentUser(null);
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    logout,
    remove,
    resetPassword,
    updateEmail,
    updatePassword,
    userData,
    setCurrentStore,
    getCurrentStore,
    addItemToStore,
    removeItemFromStore,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
