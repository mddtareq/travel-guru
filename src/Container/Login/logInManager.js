import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
export const initializeLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
}
export const googleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider).then(result => {
    const { displayName, photoURL, email } = result.user;
    const signInUser = {
      isSignIn: true,
      name: displayName,
      email: email,
      photo: photoURL,
      success: true,
    }
    return signInUser;

  })
    .catch(err => {
      console.log(err)
      console.log(err.message)
    })
}
export const facebookSignIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(fbProvider).then(function (result) {
    const { displayName, photoURL, email } = result.user;
    const signInUser = {
      isSignIn: true,
      name: displayName,
      email: email,
      photo: photoURL,
      success: true,
    }
    return signInUser;
  }).catch(err => {
    console.log(err)
    console.log(err.message)
  })
}
export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(response => {
      updateUser(name);
      const newUser = response.user;
      newUser.error = '';
      newUser.success = true;
      newUser.isSignIn = true;
      newUser.name=name;
      return newUser;
    })
    .catch(error => {
      var errorMessage = error.message;
      const newUser = {};
      newUser.success = false;
      newUser.error = errorMessage;
      return newUser;
    });
}
export const signInUserWithEmailAndPassword = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(response => {
      const newUser = response.user;
      newUser.name = newUser.displayName;
      newUser.error = '';
      newUser.success = true;
      newUser.isSignIn = true;
      return newUser;

    })
    .catch(function (error) {
      const newUser = {};
      newUser.error = error.message;
      newUser.success = false;
      return newUser;
    });
}
const updateUser = name => {
  const user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: name,
  }).catch(function (error) {
    console.log('error')
  });
}

export const signOutAll = () => {
  return firebase.auth().signOut().then(result => {
    const signOutUser = {
      isSignIn: false,
      name: '',
      email: '',
      password: '',
      photo: '',
      error: '',
      success: false
    }
    return signOutUser;
  })
    .catch(err => {
      console.log(err)
      console.log(err.message)
    })
}