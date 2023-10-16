const Navbar=(props)=>{
    return (
        <div className='navbar'>
            <h2>ProductList</h2>
            
             <button onClick={props.onOpenCart}>🛒 cart({props.counts})</button>
        </div>
    )
}
export default Navbar 