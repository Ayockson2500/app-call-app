import React, { Fragment } from 'react'

const UserInfo = ({userData}) => {
  return (
    <div>
        {
            userData.map((UserInfo, idx) => {
                return (
                    <Fragment key={idx}>
                    <p><strong>{UserInfo.name.title}: </strong>{`${UserInfo.name.first + " " + UserInfo.name.last}`}</p>
                    <p><strong>gender: </strong>{UserInfo.gender}</p>
                    <p><strong>Address: </strong><em>{UserInfo.email}</em></p>
                    <p><strong>Phone: </strong>{UserInfo.cell}</p>
                    <p><strong>Age: </strong>{UserInfo.registered.age}</p>
                    </Fragment>
                )
            })
        }
    </div>
  )
}

export default UserInfo