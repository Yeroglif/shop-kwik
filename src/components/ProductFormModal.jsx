import { useState } from "react";

export default function ProductFormModal(props) {
  const { handleAddProduct, setIsAdding } = props;
  //All form states
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  return (
    <div>
      {/* All form inputs */}
      <input
        type="text"
        placeholder="Enter product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Enter count"
        value={count}
        onChange={(e) => setCount(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Enter width (cm)"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Enter height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Enter weight (g)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      {/* Button to add inputs to products */}
      <button
        onClick={() => {
          handleAddProduct({
            id: 0,
            imageUrl: imageUrl,
            name: name,
            count: count,
            size: {
              width: width,
              height: height,
            },
            weight: weight + "g",
            comments: [
              {
                id: 0,
                productId: 0,
                description: "",
                date: "",
              },
            ],
          });
          setIsAdding(false);
        }}
      >
        Confirm
      </button>
    </div>
  );
}
