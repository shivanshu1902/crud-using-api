import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
    const [data, setData] = useState([])

    function getData() {
        axios.get('https://63abde3ccf281dba8c2c35d3.mockapi.io/crud-HM')
            .then((res) => {
                // console.log(res.data);
                setData(res.data)
            });
    }

    function handleDelete(id) {
        axios.delete(`https://63abde3ccf281dba8c2c35d3.mockapi.io/crud-HM/${id}`)
            .then(() => {
                getData()
            })
    }

    const setToLocalStorage = (id, name, email) => {
        localStorage.setItem("id", id)
        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
            <div className='d-flex justify-content-between m-2'>
                <h2>Read Operation</h2>
                <Link to='/'>
                    <button className="btn btn-outline-primary">Create</button>
                </Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {data.map((eachData) => {
                    return (
                        <>
                            <tbody>
                                <tr>
                                    <th scope="row">{eachData.id}</th>
                                    <td>{eachData.name}</td>
                                    <td>{eachData.email}</td>
                                    <td><Link to='/update'>
                                        <button className="btn btn-success"
                                            onClick={() =>
                                                setToLocalStorage(
                                                    eachData.id,
                                                    eachData.name,
                                                    eachData.email
                                                )}>
                                            Edit
                                        </button>
                                    </Link></td>
                                    <td><button className="btn btn-danger" onClick={() => handleDelete(eachData.id)}>Delete</button></td>
                                </tr>
                            </tbody>
                        </>
                    )
                })
                }
            </table>
        </>
    )
}

export default Read