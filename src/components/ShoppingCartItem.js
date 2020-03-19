import React from 'react';

const Item = props => {
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				{/* write an onclick method to remove item using item's id */}
				<button onClick={ () => props.removeItem(props.id)}>Remove from cart</button>
			
			</div>
		</div>
	);
};

export default Item;
