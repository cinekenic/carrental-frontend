export interface Car {
  id: number;
  brand: string;
  model: string;
  pricePerDay: number;
  status: 'DOSTEPNY' | 'WYPOZYCZONY';
}
