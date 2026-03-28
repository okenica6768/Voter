import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

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

let selected = [];

const container = document.getElementById("candidates");

candidates.forEach(name=>{

let div=document.createElement("div");
div.className="candidate";
div.innerText=name;

div.onclick=()=>{

if(selected.includes(name)){
selected=selected.filter(x=>x!==name);
div.classList.remove("selected");
}

else{

if(selected.length<2){
selected.push(name);
div.classList.add("selected");
}

}

};

container.appendChild(div);

});

document.getElementById("submitVote").onclick=async()=>{

if(selected.length!==2){
alert("Select exactly 2 people");
return;
}

await addDoc(collection(db,"votes"),{
vote:selected
});

alert("Vote submitted!");

};
