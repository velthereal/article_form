import './TableItem.css';

const TableItem = (props) => {
	const { img, name, model, price, category, amount, } = props;
	return (
		<tr>
			<td>{ img }</td>
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