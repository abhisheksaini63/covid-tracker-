import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import covid from './covid.json'
const Statewise = () => {
    const [data, setData] = useState([]);
    const getcases = async () => {
        // const reso = await fetch('https://jsonplaceholder.typicode.com/posts');
        setData(covid.statewise);
        
        // console.log(acctualData);
    }
    useEffect(() => {
        getcases();
    }, []);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA</span> COVID-19 Dashboard</h1>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirm</th>
                                <th>Recoverd</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((elm, ind) => {
                                    return <tr key={ind}>
                                        <th>{elm.state}</th>
                                        <td className = "cnfr">{elm.confirmed}</td>
                                        <td className = "rcvrd">{elm.recovered}</td>
                                        <td className = "dths">{elm.deaths}</td>
                                        <td>{elm.active}</td>
                                        <td>{elm.lastupdatedtime}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>


            </div>
        </>
    );
}
export default Statewise;