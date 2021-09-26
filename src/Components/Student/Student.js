import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "./Student.css"
const Student = (props) => {

    const { name, picture, email, gender, address, fee, age, department } = props.student


    const element = <FontAwesomeIcon icon={faShoppingCart} />

    console.log(props.student);
    return (
        <div className="all-single-student-class">

            {/* <div>
                <img className="img-fluid" src={picture} alt="" />
                <p> name: {name}</p>
            </div> */}



            <div className="row row-cols-2 row-cols-md-2 g-2">
                <div className="col ">
                    <div className="card bg-light">
                        <img src={picture} className="card-img-top img-size" alt="..." />

                        <div className="card-body">

                            <h6 className="card-title"> Name: {name} </h6>
                            <h6> <small> Email: {email} </small>  </h6>
                            <h6> <small> Department: {department} </small>  </h6>
                            <h6> <small> Gender: {gender}</small></h6>
                            <h6> <small> Age: {age} </small></h6>
                            <h6> <small> Address: {address} </small></h6>
                            <h6> <small> Reg. Fee: ${fee}</small></h6>



                            <button onClick={() => props.handleAddToCart(props.student)} className="btn-button"> {element} Add To Cart</button>




                        </div>
                    </div>
                </div>
            </div >






        </div >
    );
};

export default Student;