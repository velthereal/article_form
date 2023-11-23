import './TableItem.css';

const TableItem = (props) => {
	const { img, name, model, price, category, amount, id } = props;
	return (
		<tr>
			<td><img src={ img } alt="img" /></td>
			<td>{ name }</td>
			<td>{ model }</td>
			<td>{ price }</td>
			<td>{ category }</td>
			<td>{ amount }</td>
			<td>
				<button type='button'>Delete</button>
				<button type='button'>Update</button>
			</td>
		</tr>
	)
}

export default TableItem;