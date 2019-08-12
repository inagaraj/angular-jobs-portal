import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrls: ['./faq-section.component.css']
})
export class FaqSectionComponent implements OnInit {

  constructor() { }

  items = [
// tslint:disable-next-line: max-line-length
    { name: '1', active: false, question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
// tslint:disable-next-line: max-line-length
    { name: '2', active: false, question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
// tslint:disable-next-line: max-line-length
    { name: '3', active: false, question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
  ];

  items2 = [
// tslint:disable-next-line: max-line-length
    { name: '1', active: false, question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
// tslint:disable-next-line: max-line-length
    { name: '2', active: false, question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
// tslint:disable-next-line: max-line-length
    { name: '3', active: false, question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
  ];



  ngOnInit() {



  }

  toggleClass(item) {
    for (const i in this.items) {
      if (this.items[i].name !== item.name) {
      this.items[i].active = false;
      }
    }
// tslint:disable-next-line: forin
    for (const i in this.items2) {
      this.items2[i].active = false;
    }
    item.active = !item.active;
  }

  toggleClass2(item) {
    for (const i in this.items2) {
      if (this.items2[i].name !== item.name) {
      this.items2[i].active = false;
      }
    }
// tslint:disable-next-line: forin
    for (const i in this.items) {
      this.items[i].active = false;
    }
    item.active = !item.active;
  }

}
