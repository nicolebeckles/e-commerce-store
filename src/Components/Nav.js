import CartIcon from "./CartIcon";


function Nav(props){
    return(
        <nav>
            <div className="outer-wrapper">
                <a href="#home"><h1>Sahara</h1></a>
                <ul>
                    <li><a href="#clothing">Clothing</a></li>
                    <li><a href="#jewellery">Jewellery</a></li>
                    <li><a href="#electronics">Electronics</a></li>
                </ul>

                <CartIcon cartCount={props.cartCount}/>
            </div>
        </nav>
    )
}

export default Nav;