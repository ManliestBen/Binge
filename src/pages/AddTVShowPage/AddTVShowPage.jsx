import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';

class AddTVShowPage extends Component {
    state = {

    }

    render() {
        return (
            <>
                <NavBar 
                    pageName={"Add TV Show"}
                />
                <div>Add TV Show Page</div>
            </>
        )
    }
}

export default AddTVShowPage;