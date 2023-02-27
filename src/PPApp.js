import React from "react"
import { useState, useEffect } from 'react';

export default function PPApp() {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  function handleFirstNameChange(event){
    setValues({...values, firstName: event.target.value})
  }

  function handleLastNameChange(event){
    setValues({...values, lastName: event.target.value})
  }

  function handleEmailChange(event){
    setValues({...values, email: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault();
    if (values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmitted(true);
    console.log(values);
  }

    return (
        <>
    <main>
        {submitted && valid ? <header>Success! Thanks for registering</header>: null}
        <article>
            <section>
                <input 
                type="text" 
                className="first-name" 
                placeholder="First Name" 
                name="firstName"
                onChange={handleFirstNameChange}
                value={values.firstName}/>
                {submitted && !values.firstName? <aside>Please enter a first name</aside> : null}
            </section>
            <section>
                <input 
                type="text" 
                className="last-name" 
                placeholder="Last Name" 
                name="lastName"
                onChange={handleLastNameChange}
                value={values.lastName}/>
                {submitted && !values.lastName? <aside>Please enter a last name</aside> : null}
            </section>
            <section>
                <input 
                type="text" 
                className="email" 
                placeholder="Email" 
                name="email"
                onChange={handleEmailChange}
                value={values.email}/>
                {submitted && !values.email? <aside>Please enter an email address</aside> : null}
            </section>
        </article>
        <button 
        onClick={handleSubmit}
        type="submit">Register</button>
        <footer><a href="https://github.com/traez/basic-registration-form-react" target="_blank">https://github.com/traez</a></footer>
    </main>
        </>
    )
}

/*
  setSearchTerm(event.target.value)

<section 
          style={{
        backgroundColor: color
      }}
      >{number}° C</section>
*/