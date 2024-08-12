export enum EnumBookCategory {
  Drama = 'drama',
  Comedy = 'comedy',
  Sport = 'sport',
}

export interface IBook {
  id: number;
  title: string;
  image: string;
  category: EnumBookCategory;
  quantity: number;
  price: number;
  description: string;
}
