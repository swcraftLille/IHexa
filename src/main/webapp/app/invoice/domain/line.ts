import type { Amount } from './amount';
import type { LineLabel } from './lineLabel';
import type { Quantity } from './quantity';

export type Line = {
  label: LineLabel;
  quantity: Quantity;
  unitPrice: Amount;
};
