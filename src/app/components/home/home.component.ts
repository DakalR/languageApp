import {Component, OnInit} from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {StoreService, ILanguages} from '@Service/store.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {

  public myForm: FormGroup;

  constructor(private _fb: FormBuilder, private $serviseStore: StoreService) {
    this.createForm();
  }
  ngOnInit() {

  }

  createForm() {
    this.myForm = this._fb.group({
      selectedDate: [''],
      data: this._fb.array([
        this.initLanguage(),
      ])
    });
  }

  initLanguage() {
    return this._fb.group({
      name: ['', Validators.required],
      y: ['', [Validators.required, Validators.max(100)]]
    });
  }

  addLanguage() {
    const control = <FormArray>this.myForm.controls['data'];
    control.push(this.initLanguage());
  }

  removeLanguage(i: number) {
    const control = <FormArray>this.myForm.controls['data'];
    control.removeAt(i);
  }

  save(model: ILanguages) {
    this.$serviseStore.addLanguage(model);
    this.reset();
  }

  reset() {
    this.createForm();
  }

}
