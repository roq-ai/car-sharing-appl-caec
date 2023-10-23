import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  user_id: string;
  car_id: string;
  rating: number;
  comment?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  car?: CarInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  car_id?: string;
  comment?: string;
}
