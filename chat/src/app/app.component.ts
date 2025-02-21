// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms'; // FormsModule import karein
// import { ApiService } from './api.service';


// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule, FormsModule,], // FormsModule add karein
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'chat';

//   todayHistory = [' Hi', ' Hello'];
//   yesterdayHistory = [' Good morning', ' How are you?'];
//   messages: string[] = [];
//   searchQuery: string = '';


//   // Function to send message and update chatbox
//   sendMessage() {
//     if (this.searchQuery.trim()) {
//       this.messages.push('' + this.searchQuery);
//       this.searchQuery = ''; // Clear input field after sending message
//     }
//   }
// }
















import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AI';
  todayHistory = [''];
  yesterdayHistory = ['Good morning', 'How are you?'];
  messages: { text: string, sender: string }[] = [];
  searchQuery: string = '';
  

  constructor(private apiService: ApiService) { }

  // ✅ Function to send message and update chatbox
  sendMessage() {
    if (this.searchQuery.trim()) {
      // ✅ User message add karega
      this.messages.push({text: this.searchQuery, sender: 'user'});
    this.todayHistory.unshift(this.searchQuery); 



      setTimeout(() => {
        this.messages.push({text: "Thanks for your message! 😊", sender: 'bot'});
      }, 1000);

      this.searchQuery = ''; // ✅ Input field clear karo
    }

  }


}
