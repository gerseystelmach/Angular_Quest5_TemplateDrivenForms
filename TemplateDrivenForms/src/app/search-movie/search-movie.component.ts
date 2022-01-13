import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {isRequiredValidator} from "./model/isRequiredValidator";
import {rangeDateValidator} from "./model/rangeDateValidator";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {

  searchMovieForm: FormGroup = new FormGroup({});
  movieTypes: string[] = ['Film', 'Serie', 'Episode'];
  movieFormats: string[] = ['Complete', 'Short'];

  constructor(private  formBuilder: FormBuilder) {

  }

// Using formBuilder to create my Form with Angular
  intializeForm(): void {
    this.searchMovieForm = this.formBuilder.group({
      // Nested form identification
      identification: this.formBuilder.group({
        id: '',
        title: '',
      },
        {
          validator: isRequiredValidator('identify', 'title'),
        }
      ),
      type: 'Serie',
      releaseYear: ['', [Validators.required, rangeDateValidator(1900, new Date())]],
      format: ''
    }
    )
  }
/* Adding a default format option into the select */
  initializeFormat() {
    this.searchMovieForm.patchValue({
      format: 'Short',
    })
  }
  ngOnInit(): void {
    console.log(this.searchMovieForm);
    this.intializeForm();
    this.initializeFormat();

  }
// Taking the data of the formGroup in JSON
  onSubmit(): void{
    console.log(this.searchMovieForm.value);
    console.log(JSON.stringify(this.searchMovieForm.value));
    console.log("The form was sent :)");
  }
}
