import { Request, Response } from 'express';
import News from '../models/newsModels';


function generateUUID(): string {
    const timestamp = new Date().getTime().toString(16);
    const randomPart = Math.floor(Math.random() * 1000000000).toString(16);
    return `${timestamp}-${randomPart}`;
}


export const createNews = async (req: Request, res: Response) => {
    try {
        const { lang, date, headline, deskripsi, maker, urlImage, alt } = req.body;

        const newsItem = {
            id: generateUUID(),
            date,
            headline,
            deskripsi,
            maker,
            urlImage,
            alt,
        };

        let newsCollection = null;
        if (lang === 'bahasa') {
            newsCollection = await News.findOneAndUpdate({}, { $push: { bahasa: newsItem } });
        } else if (lang === 'english') {
            newsCollection = await News.findOneAndUpdate({}, { $push: { english: newsItem } });
        } else {
            throw new Error('Invalid language specified');
        }

        res.status(201).json(newsCollection);
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllNews = async (req: Request, res: Response) => {
    try {
        const news = await News.findOne();
        res.status(200).json(news);
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
};

export const getNewsById = async (req: Request, res: Response) => {
    try {
        const { lang, id } = req.params;
        const news = await News.findOne();
        let newsItem = null;
        if (lang === 'bahasa') {
            newsItem = news?.bahasa.find((item) => item.id === id);
        } else if (lang === 'english') {
            newsItem = news?.english.find((item) => item.id === id);
        } else {
            throw new Error('Invalid language specified');
        }

        if (!newsItem) {
            return res.status(404).json({ error: 'News not found' });
        }

        res.status(200).json(newsItem);
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
};

export const updateNewsById = async (req: Request, res: Response) => {
    try {
        const { lang, id } = req.params;
        const { date, headline, deskripsi, maker, urlImage, alt } = req.body;

        let newsCollection = null;
        if (lang === 'bahasa') {
            newsCollection = await News.findOneAndUpdate(
                { 'bahasa.id': id },
                {
                    $set: {
                        'bahasa.$.date': date,
                        'bahasa.$.headline': headline,
                        'bahasa.$.deskripsi': deskripsi,
                        'bahasa.$.maker': maker,
                        'bahasa.$.urlImage': urlImage,
                        'bahasa.$.alt': alt,
                    },
                }
            );
        } else if (lang === 'english') {
            newsCollection = await News.findOneAndUpdate(
                { 'english.id': id },
                {
                    $set: {
                        'english.$.date': date,
                        'english.$.headline': headline,
                        'english.$.deskripsi': deskripsi,
                        'english.$.maker': maker,
                        'english.$.urlImage': urlImage,
                        'english.$.alt': alt,
                    },
                }
            );
        } else {
            throw new Error('Invalid language specified');
        }

        if (!newsCollection) {
            return res.status(404).json({ error: 'News not found' });
        }

        res.status(200).json(newsCollection);
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteNewsById = async (req: Request, res: Response) => {
    try {
        const { lang, id } = req.params;

        let newsCollection = null;
        if (lang === 'bahasa') {
            newsCollection = await News.findOneAndUpdate({}, { $pull: { bahasa: { id: id } } });
        } else if (lang === 'english') {
            newsCollection = await News.findOneAndUpdate({}, { $pull: { english: { id: id } } });
        } else {
            throw new Error('Invalid language specified');
        }

        if (!newsCollection) {
            return res.status(404).json({ error: 'News not found' });
        }

        res.status(200).json({ message: 'News deleted successfully' });
    } catch (error : any) {
        res.status(500).json({ error: error.message });
    }
};
