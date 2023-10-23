import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface ServiceInterface {
  id?: string;
  car_id: string;
  service_date: any;
  description?: string;
  service_location?: string;
  service_provider?: string;
  created_at?: any;
  updated_at?: any;

  car?: CarInterface;
  _count?: {};
}

export interface ServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  car_id?: string;
  description?: string;
  service_location?: string;
  service_provider?: string;
}
