//pictures of a user
import { Component, useEffect, useState, useRef } from 'react'
import { firebase } from '../../firebase/config'
//photos

export default function usePhoto(){
    //to create the photos DB for a user first time
    const photoRef = firebase.firestore().collection('photos')

    const createAlbum=(uid)=>{
        const data = {
            id:uid,
            photos:[],
            profilePic:null
        };
        photoRef
            .doc(uid)
            .set(data)
            .then(() => {
                // navigation.navigate('Home', {user: data})
            })
            .catch((error) => {
                alert(error)
            });
    }


    //getAll for
    const getPhotos = (uid)=>{
        photoRef
            .doc(uid)
            .get()
            .then(res=>{
                return res.photos
            })
            .catch((error) => {
                alert(error)
            });
    }

    const addPhoto = (uid,photo)=>{
        pictures=getPhotos(uid)
        pictures.push(photo)
        photoRef
            .doc(uid)
            .update({photos:pictures})
            .catch((error) => {
                console.log(error);
            })

    }

    const getProPic =(uid)=>{
        photoRef
            .doc(uid)
            .get()
            .then(res=>{
                return 
            })
            .catch((error) => {
                alert(error)
            });

    }

    return {getPhotos,setProPic,addPhoto,removePic,createAlbum}
}