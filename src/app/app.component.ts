import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(public http: HttpClient) {

    }
    title = 'AngularNode';
    task: any;
    form: any;

    addTask() {
        let url = 'http://localhost:3000/todo/store';
        this.form = {
            "task": this.task
        }
        console.log('form data :', this.form);
        const headers = new HttpHeaders().set("Accept", "application/json");
        this.http.post(url, this.form, {headers}).subscribe(
            res => {
                console.log(res);
            },
            err=>{
                console.log(err);
            }
        )
    }
}
