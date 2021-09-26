import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUser } from '@fortawesome/free-solid-svg-icons'

import "./Calculate.css"
const Calculate = (props) => {

    const element = <FontAwesomeIcon icon={faUser} />

    const { calculate } = props;

    let total = 0;

    for (const student of calculate) {

        total = total + student.fee;
    }

    return (
        <div className="cart-class w-75">
            <h6 className="text-decoration"> {element} Students Added: {props.calculate.length}</h6>
            <h6 className="text-decoration p-2"> Total Reg. Fees: ${total} </h6>

        </div>
    );
};

export default Calculate;