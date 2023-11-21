import ArticleForm from '../ArticleForm';
import ArticleTable from '../ArticleTable';
import './ArticleList.css';

const ArticleList = () => {
	return (
		<div className='articles'>
			<h1>Список товарів</h1>
			<ArticleForm />
			<ArticleTable />
		</div>
	)
}

export default ArticleList;