import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB-yLqdM3GeComJKQkLdgethIuMxjauaF0",
  authDomain: "voter-123.firebaseapp.com",
  projectId: "voter-123",
  storageBucket: "voter-123.firebasestorage.app",
  messagingSenderId: "879784125629",
  appId: "1:879784125629:web:877966bb8c151c0e3943d4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const candidates = [
"Nina",
"Sophi",
"Timi",
"Lukas",
"Marcel",
"Aron"
];

async function loadResults(){

let snap = await getDocs(collection(db,"votes"));

let counts = {};

candidates.forEach(c => counts[c] = 0);

snap.forEach(doc => {
doc.data().vote.forEach(v => {
counts[v]++;
});
});

let results = document.getElementById("results");

Object.entries(counts)
.sort((a,b)=>b[1]-a[1])
.forEach(([name,count]) => {

let div = document.createElement("div");
div.innerHTML = `<b>${name}</b> — ${count} votes`;

results.appendChild(div);

});

}

loadResults();
