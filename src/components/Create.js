import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://63abde3ccf281dba8c2c35d3.mockapi.io/crud-HM", {
      name: name,
      email: email
    })
      .then(() => {
        history('/read')
      })
  };


  return (
    <>
      <div className='d-flex justify-content-between m-2'>
        <h2>Create</h2>
        <Link to='/read'>
          <button className="btn btn-outline-success">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default Create