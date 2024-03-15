import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    doc, 
    getDocs, 
    getDoc 
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDeroX8w0jpX5-eflhehbgp7FqTCxfov2o",
  authDomain: "vanlife-9404c.firebaseapp.com",
  projectId: "vanlife-9404c",
  storageBucket: "vanlife-9404c.appspot.com",
  messagingSenderId: "661539041944",
  appId: "1:661539041944:web:193d96fc367c2808db56ed"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
console.log(db)

const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: doc.id
    }
}


// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans", 
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// } 

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}`: `/api/host/vans`
    const res = await fetch(url)
    console.log(res)
    if(!res.ok) {
        throw {
            message: "Failed to fetch vans",
            status: res.status,
            statusText: res.statusText
        }
    }

    const data = await res.json()
    return data.vans
} 

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}