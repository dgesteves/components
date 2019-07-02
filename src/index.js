import faker from 'faker'
import React from 'react'
import ReactDOM from 'react-dom'
import UserComment from './UserComment'
import ApprovalCard from './ApprovalCard'

const time = () => Math.floor( Math.random() * 11 ) + 1

const App = () => {
    return (
        <div style={ { marginTop: '16px' } }
             className={ 'ui container comments' }>

            <ApprovalCard>
                <h3>Warning!</h3>
                <div>Are you sure?</div>
            </ApprovalCard>
            <ApprovalCard>
                <UserComment image={ faker.image.avatar() }
                             name={ faker.name.firstName() }
                             text={ faker.lorem.paragraph() }
                             time={ `Today at ${ time() }:00 PM` }/>
            </ApprovalCard>
            <ApprovalCard>
                <UserComment image={ faker.image.avatar() }
                             name={ faker.name.firstName() }
                             text={ faker.lorem.paragraph() }
                             time={ `Today at ${ time() }:00 PM` }/>
            </ApprovalCard>
            <ApprovalCard>
                <UserComment image={ faker.image.avatar() }
                             name={ faker.name.firstName() }
                             text={ faker.lorem.paragraph() }
                             time={ `Today at ${ time() }:00 PM` }/>
            </ApprovalCard>

        </div>
    )
}

ReactDOM.render( <App/>, document.querySelector( '#root' ) )