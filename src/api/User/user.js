import { Component, useEffect, useState, useRef } from 'react'
import { firebase } from '../../firebase/config'
//photos

export default function useUser(){
    const [currentUser,setCurrentUser] = useState(null)

    var getCurrentUser=async()=>{
        if (currentUser!=null){
            return currentUser
        }
        else{
            return alert("Not Logged In")
        }
        
    }
   
    const logOut=() =>{
        firebase.auth().signOut().then(function() {
            setCurrentUser(null)
            }).catch(function(error) {
            alert(error)
            });
    };

    const logIn = async(email,password) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        console.log(firestoreDocument.exists)
                        if (!firestoreDocument.exists) {
                            alert("User does not exist anymore.")
                            return;
                        }
                        setCurrentUser(firestoreDocument.data())
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert("wrong Email or Password. Please Try Again")
            })
    }


    const register = (email,password,confirmPassword,fullName) => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    fullName,
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
        });
    }






    return {register,logIn,logOut,getCurrentUser}
}