import { useState } from 'react';


const Contact = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    if (inputs.username && inputs.email && inputs.message) {
      event.preventDefault();
      console.log(inputs.username, inputs.email, inputs.message);
    } else {
      alert('Please fill out all form items');
    }
  }

    return (
      <div className="formInput">
        <h2>Contact</h2>
        <p>Feel free to contact me here!</p>
        <ul className='contact-list'>
          <li><a href="mailto:jxdang1@outlook.com"><i className="bi bi-envelope-at"></i> Email</a></li>
          <li><a href="https://github.com/jxdang1"><i className="bi bi-github"></i> GitHub</a></li>
        </ul>

        <form onSubmit={handleSubmit}>
          <label>Enter your name:
            <br />
          <input 
            type="text" 
            name="username"
            defaultValue={'Name'} 
            value={inputs.username} 
            onChange={handleChange}
          />
          </label>
          <br />
          <label>Enter your email:
            <br />
          <input 
            type="email" 
            name="email"
            defaultValue={'Email'} 
            value={inputs.email} 
            onChange={handleChange}
          />
          </label>
          <br />
        <label>Enter your message:
          <br />
          <textarea rows="2" cols="25" name="message"
          defaultValue={'Message'} 
          value={inputs.message} 
          onChange={handleChange}>
          </textarea>
          </label>
          <br />
          <br />
          <input type="submit" value="Submit" className="button" />
        </form>
      </div>
    );
  }

  export default Contact;