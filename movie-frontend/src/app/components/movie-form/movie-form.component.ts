import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.scss'
})
export class MovieFormComponent implements OnInit {
  movie: Movie = {
    title: '',
    genre: '',
    releaseYear: new Date().getFullYear()
  };
  maxYear: number = new Date().getFullYear() + 10;
  isEditing = false;
  isLoading = false;
  error: string | null = null;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.isLoading = true;
      this.movieService.getMovieById(+id).subscribe({
        next: (movie) => {
          this.movie = movie;
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'Failed to load movie details. Please try again.';
          this.isLoading = false;
          console.error('Error loading movie:', err);
        }
      });
    }
  }

  onSubmit(): void {
    this.isLoading = true;
    this.error = null;

    if (this.isEditing && this.movie.id) {
      this.movieService.updateMovie(this.movie.id, this.movie).subscribe({
        next: () => {
          this.router.navigate(['/movies'], { state: { toast: 'Movie updated successfully!' } });
        },
        error: (err) => {
          this.error = 'Failed to update movie. Please try again.';
          this.isLoading = false;
          console.error('Error updating movie:', err);
        }
      });
    } else {
      this.movieService.createMovie(this.movie).subscribe({
        next: () => {
          this.router.navigate(['/movies'], { state: { toast: 'Movie added successfully!' } });
        },
        error: (err) => {
          this.error = 'Failed to create movie. Please try again.';
          this.isLoading = false;
          console.error('Error creating movie:', err);
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/movies']);
  }
}
