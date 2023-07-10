import prisma from "@/database/database.connection";
import { CreateItem} from "@/protocols";

export async function getItemsDB() {
    return prisma.items.findMany({
        include: {
            reviews: true
        }
    })
}

export async function getNumberOfItemsDB() {
    return prisma.items.aggregate({
        _count: true
    })
}

export async function changeStatus(id: number) {
    return prisma.items.update({
        data: {
            status: true
        },
        where: {
            id
        }
    });
}

export async function getMovieByName(newMovie: CreateItem) {
    return prisma.items.findFirst({
        where: {
            name: {
                equals: newMovie.name,
                mode: 'insensitive',
            },
        },
    })
}

export async function getItemByIdDB(id: number) {
    return prisma.items.findFirst({
        where: {id}
    })
}

export async function insertItemDB(newMovie: CreateItem) {
    return prisma.items.create({
        data: newMovie
    })
}

export async function editItemDB(editedMovie: CreateItem, id: number) {
    return prisma.items.update({
        data: editedMovie,
        where: {id}
    })
}

export async function deleteItemsDB(id: number) {
    return prisma.items.delete({
        where: {id}
    })
}

export async function changeStatusWhenDeleteDB(id: number) {
    return prisma.items.update({
        data: {
            status: false
        },
        where: {
            id
        }
    });
}