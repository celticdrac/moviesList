// I've specified only used fields in this case
export interface Film {
    id: string,
    title: string,
    images: {
        artwork_portrait: string,
    }
}