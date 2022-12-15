import React from 'react'

export default function Profile({ userData }) {
    let {first_name, last_name, age, email} = userData
    return (<>
        <div>Name : {first_name} {last_name}</div>
        <div>Age : {age}</div>
        <div>Email : {email}</div>
    </>

    )
}
