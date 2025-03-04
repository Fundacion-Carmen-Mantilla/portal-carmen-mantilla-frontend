export interface MultimediaImage {
    id?: number;
    url: string;
    filename: string;
    size: number;
    type: string;
    order?: number;
}

export interface Multimedia {
    id?: number;
    title: string;
    description: string;
    category: string;
    tags: string[];
    images: MultimediaImage[];  // Cambiado de imageUrl a images
    status: 'draft' | 'published' | 'archived';
    createdAt?: Date;
    updatedAt?: Date;
    authorId?: number;
}
