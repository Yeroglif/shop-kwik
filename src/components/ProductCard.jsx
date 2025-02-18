export default function ProductCard(props) {
    const {product, setSelectedproduct} = props
    return (
        <div>
            <img src={product.imageUrl} />
            <h3>{product.name}</h3>
            <p>Count: {product.count}</p>
            <button onClick={()=>{
                setSelectedproduct(product)
            }}>More...</button>
        </div>
    )
}