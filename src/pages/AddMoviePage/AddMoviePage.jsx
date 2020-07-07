import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';

class AddMoviePage extends Component {
    state = {
        invalidForm: true,
        formData: {
            name: 'taco',
            cast: [],
            description: '',
            mpaaRating: '',
            releaseDate: '',
            runTime: '',
            genre: '',
            imdbRating: '',
            image: ''
        }

    };

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        // Use passed in function to handle adding movie
    }

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        });
    };

    render() {
        return (
            <>
                <NavBar 
                    pageName={"Add Movie"}
                />
                <div className="row">
                    <form className="col s12" ref={this.formRef} onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="name" id="movie_name" type="text" className="active" value={this.state.formData.name} onChange={this.handleChange} required />
                            <label htmlFor="movie_name">Movie Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="cast" id="cast" type="text" className="active" value={this.state.formData.cast} onChange={this.handleChange} required/>
                            <label htmlFor="cast">Cast (Separate with commas)</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="description" id="description" type="text" className="active" value={this.state.formData.description} onChange={this.handleChange}/>
                            <label htmlFor="description">Description</label>
                            </div>
                        </div>
                        <div><label>MPAA Rating</label>
                            <p>
                                <label>  
                                    <input className="with-gap" name="mpaaRating" value="G" onChange={this.handleChange} type="radio"/>
                                    <span>G</span>
                                </label>
                            </p>
                            <p>
                                <label>  
                                    <input className="with-gap" name="mpaaRating" value="PG" onChange={this.handleChange} type="radio"/>
                                    <span>PG</span>
                                </label>
                            </p>
                            <p>
                                <label>  
                                    <input className="with-gap" name="mpaaRating" value="PG-13" onChange={this.handleChange} type="radio"/>
                                    <span>PG-13</span>
                                </label>
                            </p>
                            <p>
                                <label>  
                                    <input className="with-gap" name="mpaaRating" value="R" onChange={this.handleChange} type="radio"/>
                                    <span>R</span>
                                </label>
                            </p>
                            <p>
                                <label>  
                                    <input className="with-gap" name="mpaaRating" value="NC-17" onChange={this.handleChange} type="radio"/>
                                    <span>NC-17</span>
                                </label>
                            </p>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="releaseDate" id="release" type="text" className="active" value={this.state.formData.releaseDate} onChange={this.handleChange}/>
                            <label htmlFor="release">Release Year</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="runTime" id="runtime" type="text" className="active" value={this.state.formData.runTime} onChange={this.handleChange}/>
                            <label htmlFor="runtime">Run-time (Min)</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="genre" id="genre" type="text" className="active" value={this.state.formData.genre} onChange={this.handleChange}/>
                            <label htmlFor="genre">Genre</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="imdbRating" id="imdb" type="text" className="active" value={this.state.formData.imdbRating} onChange={this.handleChange}/>
                            <label htmlFor="imdb">IMDB Rating</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                            <input name="image" id="imageURL" type="text" className="active" value={this.state.formData.image} onChange={this.handleChange}/>
                            <label htmlFor="imageURL">Image URL</label>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn red"
                            disabled={this.state.invalidForm}
                        ><i className="material-icons left">add</i>
                            Add Movie
                        </button>                           
                    </form>
                </div>
            </>
        )
    }
}

export default AddMoviePage;