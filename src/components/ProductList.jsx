const products = [
  { id: 1, name: "Nike Air Max", price: 120, available: true },
  { id: 2, name: "Adidas UltraBoost", price: 180, available: false },
  { id: 3, name: "Puma RS-X", price: 110, available: true },
  { id: 4, name: "New Balance 574", price: 100, available: true },
];

function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 shadow-md">
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-500">${product.price}</p>
          <p
            className={`text-sm ${
              product.available ? "text-green-500" : "text-red-500"
            }`}
          >
            {product.available ? "In Stock" : "Out of Stock"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
