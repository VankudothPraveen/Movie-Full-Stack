import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  isLoading = false;
  error: string | null = null;
  successMessage: string | null = null;
  deleteConfirmId: number | null = null;

  constructor(
    private movieService: MovieService, 
    private router: Router,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    // Check for toast message passed via navigation state
    const state = history.state as { toast?: string };
    if (state?.toast) {
      this.showSuccess(state.toast);
    }

    this.loadMovies();
  }

  loadMovies(): void {
    this.isLoading = true;
    this.error = null;
    this.movieService.getAllMovies().subscribe({
      next: (data) => {
        this.ngZone.run(() => {
          this.movies = data || [];
          this.isLoading = false;
          this.cdr.detectChanges(); // Force UI update
        });
      },
      error: (err) => {
        this.ngZone.run(() => {
          this.error = 'Failed to load movies. Please check that the backend is running on port 8080.';
          this.isLoading = false;
          this.cdr.detectChanges(); // Force UI update
          console.error('Error loading movies:', err);
        });
      }
    });
  }

  confirmDelete(id: number): void {
    this.deleteConfirmId = id;
  }

  cancelDelete(): void {
    this.deleteConfirmId = null;
  }

  deleteMovie(id: number): void {
    this.deleteConfirmId = null;
    this.movieService.deleteMovie(id).subscribe({
      next: () => {
        this.movies = this.movies.filter(m => m.id !== id);
        this.showSuccess('Movie deleted successfully!');
      },
      error: (err) => {
        this.error = 'Failed to delete movie. Please try again.';
        console.error('Error deleting movie:', err);
      }
    });
  }

  editMovie(id: number): void {
    this.router.navigate(['/movies/edit', id]);
  }

  addMovie(): void {
    this.router.navigate(['/movies/new']);
  }

  private showSuccess(msg: string): void {
    this.successMessage = msg;
    setTimeout(() => { this.successMessage = null; }, 3500);
  }
}
