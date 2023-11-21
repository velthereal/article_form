import './Input.css';

const Input = (props) => {
	const { label, type, placeholder, } = props;
	return (
		<label htmlFor="">
			{ label }
			<input
				type={ type || 'text' }
				placeholder={ placeholder || '' } />
		</label>
	)
}
export default Input;