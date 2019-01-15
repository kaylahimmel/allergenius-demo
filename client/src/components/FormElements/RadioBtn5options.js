import React from 'react';

const RadioBtn5 = (props) => (
	<div>
		<label className="radio-Q-label">{props.title}</label>
		<div className="form-check-5 ml-3">
			{props.options.map(option => {
				return (
					<label key={option} className="form-check-label  mr-4">
						<input
							className="form-check-input"
							setname={props.setname}
							onChange={props.controlFunc}
							value={option} 
							autocomplete="off"
							checked={props.selectedOptions.indexOf(option) > -1}
							type={props.type} /> {option}
					</label>
				);
			})}
		</div>
	</div>
);

export default RadioBtn5;
