export type ReceiptLineItem = {
  serviceDescription: string;
  qty: number;
  rate: number;
  amount: number;
};

export type ReceiptPayload = {
  title: string;
  billedTo: {
    fullName: string;
    email: string;
    phone: string;
    cityState: string;
  };
  payment: {
    receiptNo: string;
    date: string;
    paymentMode: string;
    transactionId: string;
  };
  items: ReceiptLineItem[];
  totals: {
    subtotal: number;
    gstPercent: number;
    gstAmount: number;
    totalPaid: number;
  };
  notes: string;
  paymentMessage: string;
  business: {
    name: string;
    gstNo: string;
  };
  footerMessage: string;
};

const asObject = (value: unknown): Record<string, unknown> => {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }

  return {};
};

const asString = (value: unknown, fallback = ""): string => {
  if (typeof value === "string") {
    return value;
  }

  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  return fallback;
};

const asNumber = (value: unknown, fallback = 0): number => {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) {
      return parsed;
    }
  }

  return fallback;
};

const asLineItems = (value: unknown): ReceiptLineItem[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map((item) => {
    const row = asObject(item);

    return {
      serviceDescription: asString(row.serviceDescription),
      qty: asNumber(row.qty),
      rate: asNumber(row.rate),
      amount: asNumber(row.amount),
    };
  });
};

export const toReceiptPayload = (value: unknown): ReceiptPayload => {
  const input = asObject(value);
  const billedTo = asObject(input.billedTo);
  const payment = asObject(input.payment);
  const totals = asObject(input.totals);
  const business = asObject(input.business);

  return {
    title: asString(input.title, "Payment Receipt"),
    billedTo: {
      fullName: asString(billedTo.fullName),
      email: asString(billedTo.email),
      phone: asString(billedTo.phone),
      cityState: asString(billedTo.cityState),
    },
    payment: {
      receiptNo: asString(payment.receiptNo),
      date: asString(payment.date),
      paymentMode: asString(payment.paymentMode),
      transactionId: asString(payment.transactionId),
    },
    items: asLineItems(input.items),
    totals: {
      subtotal: asNumber(totals.subtotal),
      gstPercent: asNumber(totals.gstPercent),
      gstAmount: asNumber(totals.gstAmount),
      totalPaid: asNumber(totals.totalPaid),
    },
    notes: asString(input.notes),
    paymentMessage: asString(input.paymentMessage, "Payment Received – Thank you"),
    business: {
      name: asString(business.name, "BeyondBridge Consulting"),
      gstNo: asString(business.gstNo),
    },
    footerMessage: asString(input.footerMessage, "This is a computer-generated receipt."),
  };
};
