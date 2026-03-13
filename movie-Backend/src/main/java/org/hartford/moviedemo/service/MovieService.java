package org.hartford.moviedemo.service;

import org.hartford.moviedemo.entity.Movie;

import java.util.List;
import java.util.Optional;

public interface MovieService {
    List<Movie> getAllMovies();
    Optional<Movie> getMovieById(Long id);
    Movie createMovie(Movie movie);
    Optional<Movie> updateMovie(Long id, Movie movieDetails);
    boolean deleteMovie(Long id);
}
