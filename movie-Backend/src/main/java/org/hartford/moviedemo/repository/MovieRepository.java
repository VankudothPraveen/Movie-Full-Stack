package org.hartford.moviedemo.repository;

import org.hartford.moviedemo.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long> {
}
