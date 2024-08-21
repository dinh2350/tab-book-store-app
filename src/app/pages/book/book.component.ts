import { Component, OnInit } from '@angular/core';
import { EnumBookCategory, IBook } from './book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  books?: IBook[];

  ngOnInit(): void {
    this.books = [
      {
        id: 1,
        title: 'naruto',
        image:
          'https://i.pinimg.com/564x/10/6b/bc/106bbc9e67028e763a54fea2d9e281e5.jpg',
        category: EnumBookCategory.Drama,
        quantity: 10,
        price: 20,
        description:
          "Set out on an exciting journey as we explore the huge and complicated universe of the Naruto characters. Get ready to be mesmerised by the rich tapestry of personalities that makes up the primary cast of Naruto. Watch Naruto Uzumaki's unyielding resolve, Sasuke Uchiha's mystifying charm, and Sakura Haruno's tenacity. Learn more about the depths of their fascinating backstories, connected relationships, and special talents. Be prepared for a remarkable trip where relationships are formed, destinies are determined, and the epic story of the Naruto characters plays out in front of your eyes.",
      },
      {
        id: 2,
        title: 'naruto',
        image:
          'https://i.pinimg.com/564x/10/6b/bc/106bbc9e67028e763a54fea2d9e281e5.jpg',
        category: EnumBookCategory.Drama,
        quantity: 10,
        price: 20,
        description:
          "Set out on an exciting journey as we explore the huge and complicated universe of the Naruto characters. Get ready to be mesmerised by the rich tapestry of personalities that makes up the primary cast of Naruto. Watch Naruto Uzumaki's unyielding resolve, Sasuke Uchiha's mystifying charm, and Sakura Haruno's tenacity. Learn more about the depths of their fascinating backstories, connected relationships, and special talents. Be prepared for a remarkable trip where relationships are formed, destinies are determined, and the epic story of the Naruto characters plays out in front of your eyes.",
      },
      {
        id: 3,
        title: 'naruto',
        image:
          'https://i.pinimg.com/736x/9c/1c/cc/9c1ccc8bfd376eecd216bf88c4879c1a.jpg',
        category: EnumBookCategory.Drama,
        quantity: 10,
        price: 20,
        description:
          "Set out on an exciting journey as we explore the huge and complicated universe of the Naruto characters. Get ready to be mesmerised by the rich tapestry of personalities that makes up the primary cast of Naruto. Watch Naruto Uzumaki's unyielding resolve, Sasuke Uchiha's mystifying charm, and Sakura Haruno's tenacity. Learn more about the depths of their fascinating backstories, connected relationships, and special talents. Be prepared for a remarkable trip where relationships are formed, destinies are determined, and the epic story of the Naruto characters plays out in front of your eyes.",
      },
      {
        id: 1,
        title: 'naruto',
        image:
          'https://i.pinimg.com/736x/9c/1c/cc/9c1ccc8bfd376eecd216bf88c4879c1a.jpg',
        category: EnumBookCategory.Drama,
        quantity: 10,
        price: 20,
        description:
          "Set out on an exciting journey as we explore the huge and complicated universe of the Naruto characters. Get ready to be mesmerised by the rich tapestry of personalities that makes up the primary cast of Naruto. Watch Naruto Uzumaki's unyielding resolve, Sasuke Uchiha's mystifying charm, and Sakura Haruno's tenacity. Learn more about the depths of their fascinating backstories, connected relationships, and special talents. Be prepared for a remarkable trip where relationships are formed, destinies are determined, and the epic story of the Naruto characters plays out in front of your eyes.",
      },
      {
        id: 1,
        title: 'naruto',
        image:
          'https://wallpapers.com/images/featured/naruto-pictures-mlnh852tb7krwmzz.jpg',
        category: EnumBookCategory.Drama,
        quantity: 10,
        price: 20,
        description:
          "Set out on an exciting journey as we explore the huge and complicated universe of the Naruto characters. Get ready to be mesmerised by the rich tapestry of personalities that makes up the primary cast of Naruto. Watch Naruto Uzumaki's unyielding resolve, Sasuke Uchiha's mystifying charm, and Sakura Haruno's tenacity. Learn more about the depths of their fascinating backstories, connected relationships, and special talents. Be prepared for a remarkable trip where relationships are formed, destinies are determined, and the epic story of the Naruto characters plays out in front of your eyes.",
      },
      {
        id: 1,
        title: 'naruto',
        image:
          'https://wallpapers.com/images/featured/naruto-pictures-mlnh852tb7krwmzz.jpg',
        category: EnumBookCategory.Drama,
        quantity: 10,
        price: 20,
        description:
          "Set out on an exciting journey as we explore the huge and complicated universe of the Naruto characters. Get ready to be mesmerised by the rich tapestry of personalities that makes up the primary cast of Naruto. Watch Naruto Uzumaki's unyielding resolve, Sasuke Uchiha's mystifying charm, and Sakura Haruno's tenacity. Learn more about the depths of their fascinating backstories, connected relationships, and special talents. Be prepared for a remarkable trip where relationships are formed, destinies are determined, and the epic story of the Naruto characters plays out in front of your eyes.",
      },
      {
        id: 1,
        title: 'naruto',
        image:
          'https://i.pinimg.com/736x/9c/1c/cc/9c1ccc8bfd376eecd216bf88c4879c1a.jpg',
        category: EnumBookCategory.Drama,
        quantity: 10,
        price: 20,
        description:
          "Set out on an exciting journey as we explore the huge and complicated universe of the Naruto characters. Get ready to be mesmerised by the rich tapestry of personalities that makes up the primary cast of Naruto. Watch Naruto Uzumaki's unyielding resolve, Sasuke Uchiha's mystifying charm, and Sakura Haruno's tenacity. Learn more about the depths of their fascinating backstories, connected relationships, and special talents. Be prepared for a remarkable trip where relationships are formed, destinies are determined, and the epic story of the Naruto characters plays out in front of your eyes.",
      },
    ];
  }
}
