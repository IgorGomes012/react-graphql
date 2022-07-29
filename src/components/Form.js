import React, { useState } from 'react';

function Form() {
    const [fistName, setFirstName] = useState("")
    const [lastName, setlastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassoword] = useState("")

    const addUser = () =>{}

    return (
        <div>
            <input
                type='text'
                placeholder='firstname'
                onChange={(e) => {
                    setFirstName(e.target.value);
                }} />

            <input
                type='text'
                placeholder='lastname'
                onChange={(e) => {
                    setlastname(e.target.value);
                }} />

            <input
                type='text'
                placeholder='email'
                onChange={(e) => {
                    setEmail(e.target.value);
                }} />

            <input
                type='text'
                placeholder='passoword'
                onChange={(e) => {
                    setPassoword(e.target.value);
                }} />
                <button onClick={addUser}>creat User</button>
        </div>
    )
}

export default Form;