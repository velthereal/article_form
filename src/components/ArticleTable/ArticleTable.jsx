import TableItem from "../TableItem";

import './ArticleTable.css';

const ArticleTable = () => {
	return (
		<table>
			<tr>
				<td>Фото</td>
				<td>Найменування товару</td>
				<td>Модель</td>
				<td>Ціна</td>
				<td>Категорія</td>
				<td>Кількість</td>
				<td>Дія</td>
			</tr>
			<TableItem />
		</table>
	)
}

export default ArticleTable;