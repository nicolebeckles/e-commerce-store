import Item from "./Item";

function Category(props) {
    const name = props.name;
    const id = props.id;
    const itemsInCategory=props.items;

    return (
        <div className="category" id={id}>
            <h2>{name}</h2>
            <ul className="items-container">
                {
                itemsInCategory.map(item=>{
                    return (
                        <li key={item.id}>
                            <Item item={item} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Category;
