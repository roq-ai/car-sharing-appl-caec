import { BookingInterface } from 'interfaces/booking';
import { ReviewInterface } from 'interfaces/review';
import { ServiceInterface } from 'interfaces/service';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color?: string;
  license_plate: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  review?: ReviewInterface[];
  service?: ServiceInterface[];
  company?: CompanyInterface;
  _count?: {
    booking?: number;
    review?: number;
    service?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  license_plate?: string;
  company_id?: string;
}
