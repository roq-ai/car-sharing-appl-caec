import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  service_date: yup.date().required(),
  description: yup.string().nullable(),
  service_location: yup.string().nullable(),
  service_provider: yup.string().nullable(),
  car_id: yup.string().nullable().required(),
});
