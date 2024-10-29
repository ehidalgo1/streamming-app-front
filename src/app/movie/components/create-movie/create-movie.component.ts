import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CapitalizeFirstPipe } from '../../../shared/pipes/CapitalizeFirst.pipe';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-create-movie',
  standalone: false,
  templateUrl: `create-movie.component.html`,
  styleUrl: './create-movie.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateMovieComponent { 



  constructor(
    private fb: FormBuilder, 
    private changeDetectorRef: ChangeDetectorRef,
    private movieService: MovieService
  ){}

  @ViewChild("imagePreview", { read: ElementRef }) imagePreview: any;

  countries: string[] = ['USA', 'CHL', 'MEX'];
  genders: string[] = ['Action', 'Love', 'Suspence', 'Horror', 'Drama'];
  selectedGenders: Map<string,string> = new Map<string,string>();
  actors: Map<string,string> = new Map<string,string>();
  directors: Map<string,string> = new Map<string,string>();
  fileName: string = 'file.jpg';
  



  createMovieForm: FormGroup = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)], []],
    year: ['', [Validators.required, Validators.min(1000), Validators.max(9999)], []],
    duration: ['', [Validators.required, Validators.min(1), Validators.max(999)], []],
    genders: ['', [Validators.required, Validators.minLength(3)], []],
    resume: ['', [Validators.required, Validators.minLength(10)], []],
    country: ['', [Validators.required, Validators.minLength(3)], []],
    image: ['', [Validators.required], []],
    video: ['', [Validators.required], []],
    actors: ['', [], []],
    directors: ['', [], []]
    
  });

  fileToUpload: any;
  imageUrl: any = '/no-image-preview.png';
  handleFileInput(event: any) {
    console.log(event.target.files)
    if(event.target.files && event.target.files[0]) {
      console.log('entry')
      this.fileName = event.target.files.item(0).name;
      this.fileToUpload = event.target.files[0];
      console.log('load')
      //Show image preview
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);  
      this.changeDetectorRef.detectChanges();
    }
  }

  addSelectedGenders(value: string) {
    if(value == '') return;
    this.selectedGenders.set(value ,value);
  }

  addActors(value: string) {
    if (value.length > 3) {
      this.actors.set(value, value);
      this.createMovieForm.get('actors')?.setValue('');
    }
  }

  addDirectors(value: string) {
    if (value.length > 3) {
      this.directors.set(value, value)
      this.createMovieForm.get('directors')?.setValue('');
    }
  }

  createMovie() {
    if(this.createMovieForm.invalid) {
      console.log('hay errores');
      console.log(this.createMovieForm)
      return;
    }
    console.log('no hay errores');
    const movie: Movie = {
      title: this.createMovieForm.get('title')?.value,
      duration: this.createMovieForm.get('duration')?.value,
      year: this.createMovieForm.get('year')?.value,
      genders: Array.from(this.selectedGenders.values()),
      resume: this.createMovieForm.get('resume')?.value,
      country: this.createMovieForm.get('country')?.value,
      image: this.createMovieForm.get('image')?.value,
      video: this.createMovieForm.get('video')?.value,
      actors: Array.from(this.actors.values()),
      directors: Array.from(this.directors.values()),
      isEnable: true
    }

    console.log('antes ' + movie);
    this.movieService.create(movie).subscribe(resp => {
      console.log(resp);
    })
    
    
  }
}
