import { HttpClient } from '@angular/common/http';
import { Component,inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template:`
  <div></div>
  `
})
export class AppComponent {
  #http=inject(HttpClient);
  title = 'YunShin_Angular_New_Feature';
  constructor(){
    this.#http.get("https://localhost:4200").subscribe((res)=>{
      console.log(res);
    })
  }
}
