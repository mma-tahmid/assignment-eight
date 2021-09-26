import React from 'react';

const Calculate = (props) => {

    const { calculate } = props;

    let total = 0;

    for (const student of calculate) {

        total = total + student.fee;
    }

    return (
        <div>
            <h5> Students Added:{props.calculate.length}</h5>
            <p> Total: ${total} </p>

        </div>
    );
};

export default Calculate;