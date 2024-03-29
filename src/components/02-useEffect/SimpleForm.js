import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';


export const SimpleForm = () => {

    //No se pueden utilizar hooks de manera condicional

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    
    useEffect( () => {
        //console.log('Hello World');
    }, [] );


    useEffect( () => {
        //console.log('formState changed');
    }, [formState] );


    useEffect( () => {
        //console.log('email changed');
    }, [email] );


    const handleInputChange = ({ target }) => {
        
        setFormState({
            ...formState,
            [ target.name] : target.value 
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>


            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>


            { (name === '123') && <Message /> }


        </>
    )
}
