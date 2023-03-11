import { Product } from './data/product'
import { Products } from './data/products'

const data: Products = {
  products: [
    {
      id: 1,
      title: "Basic Electric Guitar",
      price: 435,
      color: ["white", "black", "gray"],
    },
    {
      id: 2,
      title: "Used Electric Guitar",
      price: 235,
      color: ["black"],
    },
    {
      id: 3,
      title: "Used Acoustic Guitar",
      price: 135,
      color: ["white"],
    },
    {
      id: 4,
      title: "Luxury Electric Guitar",
      price: 1135,
      color: ["gray"],
    },
    {
      id: 5,
      title: "Used Electric Guitar - 5",
      price: 235,
      color: ["black"],
    },
    {
      id: 6,
      title: "Luxury Electric Guitar - 6",
      price: 1135,
      color: ["black"],
    },
    {
      id: 7,
      title: "Used Electric Guitar - 7",
      price: 225,
      color: ["black"],
    },
    {
      id: 8,
      title: "Used Electric Guitar - 8",
      price: 335,
      color: ["black"],
    },
    {
      id: 9,
      title: "Luxury Acoustic Guitar",
      price: 2235,
      color: ["white"],
    },
    {
      id: 10,
      title: "Used Acoustic Guitar - 10",
      price: 95,
      color: ["white"],
    },
    {
      id: 11,
      title: "Used Acoustic Guitar - 11",
      price: 195,
      color: ["white"],
    },
    {
      id: 12,
      title: "Used Electric Guitar - 12",
      price: 185,
      color: ["black"],
    },
    {
      id: 13,
      title: "Used Acoustic Guitar - 13",
      price: 155,
      color: ["white"],
    },
    {
      id: 14,
      title: "Used Acoustic Guitar - 14",
      price: 255,
      color: ["white"],
    },
    {
      id: 15,
      title: "Set of 2 Acoustic Guitars",
      price: 455,
      color: ["black", "white"],
    },
    {
      id: 16,
      title: "Used Electric Guitar - 16",
      price: 3255,
      color: ["white"],
    },
  ],
}

const getRandomInt = (): number => {
  const max = 1000
  const min = 100
  return Math.floor(Math.random() * Math.floor(max) + min)
}

const getProduct = (id: number): Product | undefined => {
  return data.products.find((v) => v.id === id)
}

const getProducts = (): Product[] => {
  return data.products
}

export default { getProduct, getProducts }
