import './TableItem.css';

const TableItem = (props) => {
	const { img, name, model, price, category, amount, id, onClickDeleteBtn, onClickUpdateBtn } = props;
	return (
		<tr>
			<td><img src={ img } alt="img" /></td>
			<td>{ name }</td>
			<td>{ model }</td>
			<td>{ price }</td>
			<td>{ category }</td>
			<td>{ amount }</td>
			<td>
				<button type='button' onClick={() => { onClickDeleteBtn(id) }}>Delete</button>
				<button type='button' onClick={() => { onClickUpdateBtn(id) }}>Update</button>
			</td>
		</tr>
	)
}

export default TableItem;