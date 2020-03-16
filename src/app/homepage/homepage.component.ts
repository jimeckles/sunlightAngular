import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../services/book-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  books;

  constructor(private bookService: BookServiceService) { }

  ngOnInit(): void {
  }

  onKey(event: any) {
    this.bookService.getBooks()
      .subscribe((data) => {
        console.log(data);
        let bodyData = data['body'];
        this.books = JSON.parse(bodyData);
      });
  }
}
