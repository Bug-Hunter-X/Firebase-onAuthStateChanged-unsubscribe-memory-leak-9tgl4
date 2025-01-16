let unsubscribe;

const authStateChanged = () => {
unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    const uid = user.uid;
    console.log('User is signed in:', uid);
    // ...
  } else {
    // User is signed out
    // ...
    console.log('User is signed out');
  }
});
}

const unmount = () => {
if(unsubscribe){
unsubscribe();
console.log('Unsubscribe called');
}
}

//Call authStateChanged when component mounts
authStateChanged();
//Call unmount when the component unmounts