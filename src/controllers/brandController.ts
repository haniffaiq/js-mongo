import { Request, Response } from 'express';
import Brand from '../models/brandModels';



export const addReadPermission = async (req: Request, res: Response) => {
    try {
        const brandId = req.params.brandId;
        const userId = req.body.userId;
        const brand = await Brand.findById(brandId);
        if (!brand) {
            throw new Error('Brand not found');
        }
        if (!brand.readPermission.includes(userId)) {
            brand.readPermission.push(userId);
        }
        if (brand.fullPermission.includes(userId)) {
            brand.fullPermission = brand.fullPermission.filter((id) => id !== userId);
        }
        await brand.save();
        res.status(200).json({ message: 'Read permission added successfully', brand });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const removeFullPermission = async (req: Request, res: Response) => {
    try {
        const brandId = req.params.brandId;
        const userId = req.body.userId;
        const brand = await Brand.findById(brandId);
        if (!brand) {
            throw new Error('Brand not found');
        }
        if (brand.fullPermission.includes(userId)) {
            brand.fullPermission = brand.fullPermission.filter((id) => id !== userId);
        }
        if (!brand.readPermission.includes(userId)) {
            brand.readPermission.push(userId);
        }
        await brand.save();
        res.status(200).json({ message: 'Full permission removed successfully', brand });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
export const addFullPermission = async (req: Request, res: Response) => {
    try {
        const brandId = req.params.brandId;
        const userId = req.body.userId;
        const brand = await Brand.findById(brandId);
        if (!brand) {
            throw new Error('Brand not found');
        }
        if (!brand.fullPermission.includes(userId)) {
            brand.fullPermission.push(userId);
        }
        if (brand.readPermission.includes(userId)) {
            brand.readPermission = brand.readPermission.filter((id) => id !== userId);
        }
        await brand.save();
        res.status(200).json({ message: 'Full permission added successfully', brand });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const createBrand = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const userId = req.body.userId;
        const brand = new Brand({ name, userId, readPermission: [userId] });
        await brand.save();
        res.status(201).json({ message: 'Brand created successfully', brand });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const getBrands = async (req: Request, res: Response) => {
    try {
        const userId = req.body.userId;
        const brands = await Brand.find({ userId });
        res.status(200).json({ brands });
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

// export const updateBrand = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, { new: true });
//     res.status(200).json(updatedBrand);
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// };

// export const deleteBrand = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     await Brand.findByIdAndDelete(id);
//     res.status(200).json({ message: 'Brand deleted successfully' });
//   } catch (error: any) {
//     res.status(400).json({ message: error.message });
//   }
// };
