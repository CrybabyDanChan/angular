import { HttpClient } from '@angular/common/http';
import { MyValidators } from './my-validators';
import { AppLocalService } from './services/app-local.service';
import { AppCounterService } from './services/app-counter.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';

export interface Post {
  title: string;
  id?: number;
}

export interface ToDo {
  completed: boolean;
  id?: number | string;
  title: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [AppLocalService],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  todos: ToDo[] = [];
  todoForm: FormGroup;
  form: FormGroup;
  posts: Array<any> = [];
  appState = 'off';
  newTodo: ToDo;

  constructor(
    private AppCounterService: AppCounterService,
    private AppLocalService: AppLocalService,
    private http: HttpClient,
    ) {}

  ngOnInit() {
    this.http.get<ToDo[]>('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .pipe(delay(1500))
      .subscribe(responce => {
        this.todos = responce;
      });

    this.form = new FormGroup({
      email: new FormControl(
        '',
        [
          Validators.email,
          Validators.required,
          MyValidators.restrictedEmails,
        ],
        [MyValidators.usingEmail]
      ),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.required
      ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });

    this.todoForm = new FormGroup({
      title: new FormControl('', [Validators.required])
    });
  }

  addNewItem(item: object): void {
    this.posts.push(item);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form: ', this.form);
      const formData = {...this.form.value};

      console.log('Form Data:', formData);
      this.form.reset();
    }
  }

  setCapital(): void {
    const listCapitals = {
      ru: 'Moscov',
      ua: 'Kiev',
      by: 'Minsk',
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = listCapitals[cityKey];

    this.form.patchValue({
      address: { city }
    });
  }

  addSkills(): void {
    const control = new FormControl('', Validators.required);
    const skillsGroup = (this.form.get('skills') as FormArray);
    /// (this.form.get('skills') as FormArray)
    skillsGroup.push(control);
  }

  handleChange(): void {
    console.log(this.appState);
  }

  downloadTodo(): void {
    const body = {
      title: this.todoForm.get('title').value,
      completed: false,
    };

    this.http.post<ToDo>('https://jsonplaceholder.typicode.com/todos', body)
      .subscribe(responce => this.newTodo = responce);
  }

  addInTodos(): void {
    if (this.newTodo) {
      this.todos.push(this.newTodo);
    }
    this.newTodo = undefined;
    this.todoForm.reset();
  }

}
