import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import '../../index.css'

const PageCreation = () => {
const [selection, setSelection] = useState(null);
const [date, setDate] = useState(null);

useEffect(() => {
    DateFormat();
},[]);

const DateFormat = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
    setDate(formattedDate);
};

const handleSelect = (option) => {
    setSelection(option);
};

const options = [
    {label: "4/4/2023", value: 1},
    {label: "4/5/2023", value: 2},
    {label: "4/6/2023", value: 3},
]

    return ( 
        <div className='flex'>
            <Dropdown value={selection} onChange={handleSelect} options={options} title=""/>
            {selection && (selection.value)}
            <p>Or...</p>
            <button >Create a new Page</button>
            {date}
        </div>
     );
}
 
export default PageCreation;