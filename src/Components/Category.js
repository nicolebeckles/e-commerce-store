import Item from "./Item";

function Category(props) {
    const name = props.name;
    const id = props.id;
    const itemsInCategory=props.items;

    return (
        <div className="category" id={id}>
            <h2>{name}</h2>
            <div className="items-container">
                {
                itemsInCategory.map(item=>{
                    return (
                        <Item
                            key={item.id}
                            item={item}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Category;
