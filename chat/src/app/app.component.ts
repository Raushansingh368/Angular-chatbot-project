
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


  ngOnInit() {
    const savedHistory = localStorage.getItem('todayHistory');
    if (savedHistory) {
      this.todayHistory = JSON.parse(savedHistory);



      
    }
    
  }

  



  sendMessage() {
    if (this.searchQuery.trim()) {

      this.messages.push({ text: this.searchQuery, sender: 'user' });
      this.todayHistory.unshift(this.searchQuery);


      localStorage.setItem('todayHistory', JSON.stringify(this.todayHistory));

      // ✅ Chatbox me message add karo

      setTimeout(() => {
        this.messages.push({ text: "Thanks for your message! 😊", sender: 'bot' });
      }, 1000);

      this.searchQuery = '';
    }
  }
  deleteMessage(index: number): void {
    if (index > -1 && index < this.todayHistory.length) {
      this.todayHistory.splice(index, 1);
      localStorage.setItem('todayHistory', JSON.stringify(this.todayHistory));
    }
  }

}
