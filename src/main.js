import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBd54EneJ3mjFGWWcMF4kprUvD0luHPiBo",
//   authDomain: "course-vue-7acae.firebaseapp.com",
//   projectId: "course-vue-7acae",
//   storageBucket: "course-vue-7acae.appspot.com",
//   messagingSenderId: "647539786526",
//   appId: "1:647539786526:web:27eae8ac5bcb72a1af3f0f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);