import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';

import app from './firebase.utils';

// Get the Auth instance associated with the provided app
const auth = getAuth(app);

// Since v9 auth functions are standalone, thus bind them to the current auth
// instance and re-export them for convenience
export const onMyAuthStateChanged = onAuthStateChanged.bind(null, auth);
export const authSignOut = signOut.bind(null, auth);

// Create an instance of the Google provider object
// This will allow user to sign in with their Google account
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

// Will prompt user to sign in with a Google pop-up
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default auth;
