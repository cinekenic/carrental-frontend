export interface Car {
  id: number;
  brand: string;
  model: string;
  pricePerDay: number | null;
  status: 'DOSTEPNY' | 'WYPOZYCZONY';
}
