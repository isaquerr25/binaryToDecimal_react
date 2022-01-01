import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM  from 'react-dom';

import {
  StyledForm,
  BinaryTextInput,
  Label,
  Button,
  DecimalTextInput,
  Field
} from './Styled.js'


function App() {

  const [binaryText,setBinaryText]     = useState('');
  const [decimalText,setDecimalText]    = useState('');
  const [errorMensage,setErrorMansage] = useState('');

  const onFormSubmit = e =>{
    e.preventDefault() 

    if(binaryText.match(/^[0-1]+$/g) === null ){
      setErrorMansage('Enter either 0 or 1')
      return
    }
  };

  setErrorMansage('')
  
  const reverserBinaryText = binaryText.split('').map(Number).reverse()
  

  const result = reverserBinaryText.reduce(
    (accumulator, currentValue, idx) =>
      accumulator + currentValue * Math.pow(2, idx)
  )
  
  setDecimalText(result);


  return (
    <>
      <h1>Convert To Decimal</h1>
      <StyledForm onSubmit={onFormSubmit}>
        {errorMensage && <span style={{ color:'red'}} > {errorMensage} </span>}
        <br />
        <Field> 
          <Label> Binary Input </Label>
          <div>
            <BinaryTextInput 
              autoComplete='off'
              type='text'
              placeholder='Enter 0 or 1'
              value={binaryText}
              onChange={e => setBinaryText(e.target.value)}
            />
            <Button type='submit'>Convert</Button>
          </div>
        </Field>
        <Field>
          <Label>Decimal Output</Label>
          <DecimalTextInput
            type="text"
            name="decimal"
            value={decimalText}
            disabled
          />
        </Field>
      </StyledForm>
    </>
  );
}

// export default App;
const rootElement = document.getElementById('root')
ReactDOM.render(<App />,rootElement)