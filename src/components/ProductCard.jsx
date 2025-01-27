function ProductCard({ name, price, available, image }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 object-contain mx-auto mb-4"
      />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-500">${price}</p>
      <p className={`text-sm ${available ? "text-green-500" : "text-red-500"}`}>
        {available ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;
