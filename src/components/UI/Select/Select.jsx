import React, { useState }  from 'react';
import './Select.scss'

const Select = ({value, options, onChange}) => {
	const [showOptions, setShowOptions] = useState(false)
	let classActive ='';
	showOptions ? classActive ='select_active' : classActive = '';

	return (
	<div className='select__wrapper'>
			<div className={['select', classActive].join(' ')}
				 onClick = {()=> setShowOptions(!showOptions)}
			>
			{/* Select defaultvalue */}
				{value && 
					<span className='select__options_option'>
						<span>{value.name}</span>
					</span>}
			</div>
				{showOptions && (
					<div  className="select__options">
						{options.map(option => (
							<div 
								className = "select__options_option"
								onClick={()=> {onChange(option); setShowOptions(!showOptions)}}
								key={option}
							>
								<span>{option.name}</span>
							</div>	
						))}
					</div>
				)}
		</div>
  );
};

export default Select;
