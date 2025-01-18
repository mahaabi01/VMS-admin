export type CreditLedger = {
  total_credit: number;
  paidAmount: number;
  remainingAmount: number;
  lastPaymentDate: string;
  dueDate: string;
  userId: number;
  orderId: string;
};

