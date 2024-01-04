import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {/* write html inside () first () will be loaded if true else second () will render */}
        {props.isLoggedIn ? (
                <div>
                    <p>Welcome, please complete steps</p>
                    <ol>
                        <li>Email</li>
                        <li>Profile</li>
                        <li>Subscribe to newsletter</li>
                    </ol>
                </div>
            ) : (<p>Please Sign in</p>)}
    </div>
  )
}

export default UserMessage