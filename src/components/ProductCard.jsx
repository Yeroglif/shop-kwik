export default function ProductCard(props) {
    const {product, setSelectedproduct} = props
    return (
        <div className="product-card">
            <img src={product.imageUrl} />
            <h3>{product.name}</h3>
            <p>Count: {product.count}</p>
            {/* Button to go to ProductView */}
            <button onClick={()=>{
                setSelectedproduct(product)
            }}>More...</button>
        </div>
    )
}