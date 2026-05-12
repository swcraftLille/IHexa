import type { City } from './city';
import type { Street } from './street';
import type { ZipCode } from './zipCode';

export type Address = {
  street: Street;
  city: City;
  zipCode: ZipCode;
};
