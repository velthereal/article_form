import './Input.css';

const Input = (props) => {
	const { value, label, type, placeholder, onChangeFunction } = props;
	return (
		<label htmlFor="">
			{ label }
			<input
				type={ type || 'text' }
				placeholder={ placeholder || '' }
				onChange={(event) => onChangeFunction(event.target.value)}
				value={value}
				min={0} />
		</label>
	)
}
export default Input;