import { Request, Response } from "express";
import Product from "../models/product.model";

export const getProductsHandler = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
};

export const createProductHandler = async (req: Request, res: Response) => {
  const { name, price, description, stock } = req.body;
  const product = new Product({
    name,
    price,
    description,
    stock,
  });
  const productSaved = await product.save();
  res.json(productSaved);
};

export const updateProductHandler = (req: Request, res: Response) => {
  res.send("updating Products");
};

export const deleteProductHandler = async (req: Request, res: Response) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.json(deletedProduct);
};

export const getProductHandler = (req: Request, res: Response) => {
  res.send("getting Product");
};
