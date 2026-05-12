import type { Amount } from '@/invoice/domain/amount.ts';
import type { InvoiceId } from './invoiceId';
import type { Line } from './line';
import type { Recipient } from './recipient';

export type Invoice = {
  id: InvoiceId;
  recipient: Recipient;
  lines: Line[];
  total: Amount;
};
