export type CreateItem = {
    name: string;
    streaming_id: number;
    type_id: number;
    genre: string;
}

export type Review = {
    id: number;
    item_id: number;
    stars: number;
    comments: string;
};


export type Item = {
    id: number;
    name: string;
    streaming_id: number;
    type_id: number;
    genre: string;
    status: boolean
}

export type EditReview = Omit <Review, "id">;

export type ApplicationError = {
    name: string;
    message: string;
};
