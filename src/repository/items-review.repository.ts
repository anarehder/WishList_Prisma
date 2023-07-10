import prisma from "@/database/database.connection";
import { EditReview, Review } from "@/protocols";

export async function getItemsReviewDB() {
    return prisma.reviews.findMany();
}

export async function getItemReviewByIdDB(id: number) {
    return prisma.reviews.findFirst({
        where: {id}
    })
}

export async function insertItemReviewDB(newReview: Review, id: number) {
    return prisma.reviews.create({
        data: {
            item_id: id,
            ...newReview
        }
    })
}

export async function editItemReviewDB(editedReview: EditReview, id: number) { // apenas 1 review por filme (uso pessoal)
    return prisma.reviews.update({
        data: editedReview,
        where: {id}
    })
}

export async function deleteReviewDB(id: number) {
    return prisma.reviews.delete({
        where: {id}
    })
}