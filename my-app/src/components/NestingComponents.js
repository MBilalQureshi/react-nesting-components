import React, { Component } from 'react'

export class NestingComponents extends Component {
    constructor(props) {
        super(props)
        this.state = {
           isLoaded : true,
           isLoggedIn : true,
        }
      }
  render() {
    return (
        <div>
            <h1>
                {this.state.isLoaded ? 'Data loaded' : 'Loading...'}
            </h1>

            {/* write html inside () first () will be loaded if true else second () will render */}
            {this.state.isLoggedIn ? (
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
}

export default NestingComponents