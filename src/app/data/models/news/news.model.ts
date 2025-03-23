export interface News {
    id?: string;
    title: string;
    summary: string;
    content: string;
    category: string;
    tags?: string[];
    publicationDate: string;
    images?: File[];
    createdAt?: Date;
}
