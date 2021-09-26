import React, { useEffect, useState } from 'react';
import Calculate from '../Calculate/Calculate';
import Student from '../Student/Student';
import "./Fullteam.css"

const Fullteam = () => {

    const [students, setStudents] = useState([]);

    const [calculate, setCalculate] = useState([]);
    useEffect(() => {
        fetch("./students.json")
            .then(res => res.json())
            .then(data => setStudents(data))

    }, [])

    const handleAddToCart = (student) => {
        const newStudent = [...calculate, student];
        setCalculate(newStudent);
    }

    //d-flex
    return (
        <div className="full-layout-conatiner mt-4">
            <div className="students-container">

                {/* <h2> Total student:{students.length}  </h2> */}

                {

                    students.map(student => <Student
                        key={student._id}
                        student={student}
                        handleAddToCart={handleAddToCart}

                    >

                    </Student>)

                }

            </div>





            <div className="carts-container">

                {/* <h6> players added</h6> */}

                <Calculate calculate={calculate}> </Calculate>

            </div>


        </div>
    );
};

export default Fullteam;