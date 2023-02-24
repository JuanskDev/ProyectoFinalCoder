import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "reactcoderhouse-a1148.firebaseapp.com",
  projectId: "reactcoderhouse-a1148",
  storageBucket: "reactcoderhouse-a1148.appspot.com",
  messagingSenderId: "758055432509",
  appId: "1:758055432509:web:e36a05896e9aa4f14c9554",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

const loadProducts = async () => {
  const res = await fetch("./json/productos.json");
  const productos = await res.json();
  productos.forEach(async (producto) => {
    await addDoc(collection(db, "productos"), {
      nombre: producto.nombre,
      precio: producto.precio,
      descripcion: producto.descripcion,
      stock: producto.stock,
      img: producto.img,
      idCategoria: producto.idCategoria,
    });
  });
};

export default loadProducts;

export const getProducts = async () => {
  const products = await getDocs(collection(db, "productos"));
  const items = products.docs.map((prod) => {
    return { ...prod.data(), id: prod.id };
  });
  return items;
};

export const getProduct = async (id) => {
  const product = await getDoc(doc(db, "productos", id));
  const item = { ...product.data(), id: product.id };
  return item;
};

export const updateProduct = async (id, info) => {
  await updateDoc(doc(db, "productos", id), info);
};

export const deleteProduct = async (id) => {
  await deleteDoc(doc(db, "productos", id));
};

export const createOrdenCompra = async (
  cliente,
  productos,
  precioTotal,
  fecha
) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
    datosCliente: cliente,
    productos: productos,
    precioTotal: precioTotal,
    fecha: fecha,
  });
  return ordenCompra;
};

export const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id));
  const oCompra = { ...ordenCompra.data(), id: ordenCompra.id };
  return oCompra;
};
