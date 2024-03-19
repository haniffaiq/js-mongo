import { Request, Response } from 'express';
import Product from '../models/productModels';
import Brand from '../models/brandModels';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, brandId } = req.body;
    const userId = req.body.userId;

    const brand = await Brand.findById(brandId);
    if (!brand) {
      throw new Error('Brand not found');
    }

    let permission = 'read';
    if (brand.fullPermission.includes(userId)) {
      permission = 'full';
    }

    if (permission !== 'full') {
      throw new Error('User does not have permission to create product');
    }

    const product = new Product({ name, brandId, userId });
    await product.save();
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { name } = req.body;
    const userId = req.body.userId;

    const product = await Product.findById(productId);
    if (!product) {
      throw new Error('Product not found');
    }

    const brand = await Brand.findById(product.brandId);
    if (!brand) {
      throw new Error('Brand not found');
    }

    let permission = 'read';
    if (brand.fullPermission.includes(userId)) {
      permission = 'full';
    }

    if (permission !== 'full') {
      throw new Error('User does not have permission to update product');
    }

    product.name = name;
    await product.save();
    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const userId = req.body.userId;

    const product = await Product.findById(productId);
    if (!product) {
      throw new Error('Product not found');
    }

    const brand = await Brand.findById(product.brandId);
    if (!brand) {
      throw new Error('Brand not found');
    }

    let permission = 'read';
    if (brand.fullPermission.includes(userId)) {
      permission = 'full';
    }

    if (permission !== 'full') {
      throw new Error('User does not have permission to delete product');
    }

    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error:any) {
    res.status(400).json({ message: error.message });
  }
};

export const getProductbyId = async (req: Request, res: Response) => {
    try {
      const { productId } = req.params;
      const userId = req.body.userId;
  
      const product = await Product.findById(productId);
      if (!product) {
        throw new Error('Product not found');
      }
  
      const brand = await Brand.findById(product.brandId);
      if (!brand) {
        throw new Error('Brand not found');
      }

  
      res.status(200).json({ product });
    } catch (error : any) {
      res.status(400).json({ message: error.message });
    }
  };

  export const getProduct = async (req: Request, res: Response) => {
    try {
        const { brandId } = req.params;
        const products = await Product.find({ brandId });
        res.status(200).json({ products });
      } catch (error: any) {
        res.status(400).json({ message: error.message });
      }
  };

