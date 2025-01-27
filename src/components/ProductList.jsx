import ProductCard from "./ProductCard";
import nikeImage from "../assets/images/NIKE.png";
import adidasImage from "../assets/images/Ultraboost.png";
import pumaImage from "../assets/images/Puma.png";
import nbImage from "../assets/images/NB.png";

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 120,
    available: true,
    image: nikeImage,
  },
  {
    id: 2,
    name: "Adidas UltraBoost",
    price: 180,
    available: false,
    image: adidasImage,
  },
  { id: 3, name: "Puma RS-X", price: 110, available: true, image: pumaImage },
  {
    id: 4,
    name: "New Balance 574",
    price: 100,
    available: true,
    image: nbImage,
  },
];

function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          available={product.available}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;
