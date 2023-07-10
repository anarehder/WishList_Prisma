import { notFoundError } from "@/errors/not-found-error";
import { Review, EditReview } from "@/protocols";
import { deleteReviewDB, editItemReviewDB, getItemReviewByIdDB, getItemsReviewDB, insertItemReviewDB } from "@/repository/items-review.repository";
import { changeStatusWhenDeleteDB } from "@/repository/items.repository";


export async function getItemsReviewServices(){
    const reviews = await getItemsReviewDB();
    if (!reviews) {
        throw notFoundError(); // lança um erro para quem chamou essa função!
    }

    return reviews;
}

export async function getItemsReviewByIdServices(id: number){
    const reviews = await getItemReviewByIdDB(id);
    if (!reviews) {
        throw notFoundError(); // lança um erro para quem chamou essa função!
    }

    return reviews;
}

export async function insertItemsReviewServices(newReview:Review, id:number){
    const result = await insertItemReviewDB(newReview,id);

    return result;
}

export async function editItemsReviewServices(editedReview:EditReview, id:number){
    const result = await editItemReviewDB(editedReview, id);

    return result;
}

export async function deleteReviewServices(id:number){
    
    const item = await getItemReviewByIdDB(id);
    await changeStatusWhenDeleteDB(item.item_id);
    const result = await deleteReviewDB(id);

    return result;
}