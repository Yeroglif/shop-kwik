export default function Layout(props) {
    const {children, setSelectedproduct} = props

    const header = (
        <header>
            <button onClick={()=>{
                setSelectedproduct(null)
            }} ><h1>Shop Kwik</h1></button>
        </header>
    )
    return (
        <div>
            {header}
            {children}
        </div>
    )
}