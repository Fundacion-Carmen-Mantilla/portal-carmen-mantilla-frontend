export interface MultimediaImage {
    id?: number;
    url: string;
    filename: string;
    size: number;
    type: string;
    order?: number;
}

export interface CulturalDevelopment {
    id?: number;
    title: string;
    description: string;
    institution: string;
    project: string;
    tags: string[];
    images: MultimediaImage[];
    status: 'draft' | 'published' | 'archived';
    createdAt?: Date;
    updatedAt?: Date;
    authorId?: number;
}
