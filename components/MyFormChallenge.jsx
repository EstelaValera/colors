import {useRef, useState, useEffect } from 'react'
import BoxColor from './boxColor/BoxColor'

function MyForm() {
    const inputRef = useRef(null)
    const [input, setInput] = useState('')
    const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const handleChange = () => {
        setInput(inputRef.current.value)
    }
    return (
        <>
        <input 
        type='text'
        placeholder='choose a color'
        value={input}
        ref={inputRef}
        onChange={handleChange}
        />
        <ul className="container">
        {colors.map(color => <BoxColor key={color} color={color} value={input}/>)}
        </ul>
        </>
    );
    }

export default MyForm;