import React, { Component } from "react";
import styled from "styled-components";
import Movie from "./Movie";

class MoviesList extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
      const movies = await res.json();
      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;

  @media only screen and (min-width: 550px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 700px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (min-width: 850px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (min-width: 1000px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
