import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  projectId: "frb-upl-books",
  appId: "1:62919667151:web:12e2dd9318cf8baa6176ba",
  storageBucket: "frb-upl-books.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyB3B0iKQ_fNx_L2oWGFDK0AR7nCZZGn_EI",
  authDomain: "frb-upl-books.firebaseapp.com",
  messagingSenderId: "62919667151",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export { storage };
