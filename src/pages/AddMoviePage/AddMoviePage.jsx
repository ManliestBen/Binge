import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';

class AddMoviePage extends Component {
    state = {

    }

    render() {
        return (
            <>
                <NavBar 
                    pageName={"Add Movie"}
                />
                <div>Add Movie Page</div>
            </>
        )
    }
}

export default AddMoviePage;