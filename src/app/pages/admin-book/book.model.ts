export interface Book {
  id: number;
  title: string;
  image: string;
  category: 'drama' | 'comedy' | 'sport';
  quantity: number;
  price: number;
  description: string;
}
