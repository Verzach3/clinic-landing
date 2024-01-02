export interface BlogPost {
    id: number,
    title: string,
    image: string,
    recent: boolean,
    contentmd: string,
    tags: string[],
    date_created: Date,
    date_updated: Date
}