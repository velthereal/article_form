import Input from "../Input";
import TableItem from "../TableItem";
import './ArticleForm.css';
import { v4 as getUniqueId } from 'uuid';
import { useState } from "react";

const DEFAULT_ARTICLES = [
	{
		name: 'something',
		price: '10.00',
		img: 'https://kinogoo.zone/uploads/posts/2020-06/1593002463_yelloustoun.jpg',
		category: 'films',
		amount: '1',
		model: '1452',
		id: getUniqueId(),
	},
	{
		name: 'something',
		price: '10.00',
		img: 'https://kinogoo.zone/uploads/posts/2020-06/1593002463_yelloustoun.jpg',
		category: 'films',
		amount: '20',
		model: '1452',
		id: getUniqueId(),
	},
]


const ArticleForm = () => {
	const [articles, setArticles] = useState(DEFAULT_ARTICLES);

	const [name, setName] = useState();
	const [price, setPrice] = useState();
	const [img, setImg] = useState();
	const [category, setCategory] = useState();
	const [amount, setAmount] = useState();
	const [model, setModel] = useState();

	const onGetName = (value) => {
		setName(value);
	}
	const onGetPrice = (value) => {
		setPrice(value);
	}
	const onGetImg = (value) => {
		setImg(value);
	}
	const onGetCategory = (value) => {
		setCategory(value);
	}
	const onGetAmount = (value) => {
		setAmount(value);
	}
	const onGetModel = (value) => {
		setModel(value);
	}

	const onAddArticle = () => {
		const article = {
			name,
			price,
			img,
			category,
			amount,
			model,
			id: getUniqueId(),
		};

		setArticles([...articles, article]);

		onGetName('');
		onGetPrice('');
		onGetImg('');
		onGetCategory('');
		onGetAmount('');
		onGetModel('');
	}

	return (
		<div className="articles">
			<h1>Список товарів</h1>
			<form action="">
				<Input
					label='Найменування:'
					placeholder='Напишіть найменування товару'
					onChangeFunction={onGetName}
					value={name} />
				<Input
					label='Ціна:'
					placeholder='Напишіть ціну товару'
					onChangeFunction={onGetPrice}
					value={price} />
				<Input
					label='Фото:'
					placeholder='Вставте посилання на фото'
					onChangeFunction={onGetImg}
					value={img} />
				<Input
					label='Категорія:'
					placeholder='Напишіть категорію товару'
					onChangeFunction={onGetCategory}
					value={category} />
				<Input
					label='Кількість:'
					placeholder='Кількість товару в наявності'
					onChangeFunction={onGetAmount}
					value={amount}
					type='number' />
				<Input
					label='Модель:'
					placeholder='Напишіть модель товару'
					onChangeFunction={onGetModel}
					value={model} />
				<button type="button" onClick={onAddArticle}>Add</button>
			</form>
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
				{articles.map((article, index) => {
					const { name, price, img, category, amount, model, id } = article;
					return (
						<TableItem 
							key={index}
							name={name}
							price={price}
							img={img}
							category={category}
							amount={amount}
							model={model}
							id={id} />
					)
				})}
		</table>
		</div>
	)
}

export default ArticleForm;