import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
/*
Importing 'Link' from react-router-dom. Gives us tooling for navigation.
*/
import { Link } from 'react-router-dom';

class MovieItem extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img src={this.props.movie.Poster}></img>
                            <footer>
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.movie._id} className="btn btn-primary">Edit</Link>
                </Card>
            </div>
            // ********************************************
            // ABOVE: Adding edit button
            // ********************************************
        );
    }
}
export default MovieItem;