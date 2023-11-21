import Input from "../Input";
import './ArticleForm.css';


const ArticleForm = () => {
	return (
		<form action="">
			<Input
				label='Найменування:'
				placeholder='Напишіть найменування товару' />
			<Input
				label='Ціна:'
				placeholder='Напишіть ціну товару' />
			<Input
				label='Фото:'
				placeholder='Вставте посилання на фото' />
			<Input
				label='Категорія:'
				placeholder='Напишіть категорію товару' />
			<Input
				label='Кількість:'
				placeholder='Кількість товару в наявності' />
			<Input
				label='Модель:'
				placeholder='Напишіть модель товару' />
			<button type="button">Add</button>
		</form>
	)
}

export default ArticleForm;