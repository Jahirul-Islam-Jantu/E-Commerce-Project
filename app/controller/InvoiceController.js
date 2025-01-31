import {
  CreateInvoiceService,
  InvoiceListService,
  InvoiceProductListService,
  PaymentCancelService,
  PaymentFailService,
  PaymentIPNService,
  PaymentSuccessService,
} from "../services/InvoiceService.js";

export const CreateInvoiceController = async (req, res) => {
  const result = await CreateInvoiceService(req);
  return res.status(200).json({ message: result });
};
export const PaymentFailController = async (req, res) => {
  const result = await PaymentFailService(req);
  return res.redirect("localhost:5173/profile");
};

export const PaymentCancelController = async (req, res) => {
  const result = await PaymentCancelService(req);
  return res.redirect("localhost:5173/profile");
};

export const PaymentIPNController = async (req, res) => {
  const result = await PaymentIPNService(req);
  return res.status(200).json({ message: result });
};

export const PaymentSuccessController = async (req, res) => {
  const result = await PaymentSuccessService(req);
  return res.redirect("localhost:5173/profile");
};

export const InvoiceListController = async (req, res) => {
  const result = await InvoiceListService(req);
  return res.status(200).json({ message: result });
};

export const InvoiceProductListController = async (req, res) => {
  const result = await InvoiceProductListService(req);
  return res.status(200).json({ message: result });
};
