export default function ProductCard(props) {
    const {product} = props
    return (
        <div>
            <img src={product.imageUrl} />
            <h3>{product.name}</h3>
            <p>Count: {product.count}</p>
        </div>
    )
}