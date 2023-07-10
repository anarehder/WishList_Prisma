import prisma from "@/database/database.connection";
import { CreateItem, Item, Review} from "@/protocols";

export async function getItemsDB(): Promise<Item[]> {
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

export async function getMovieByName(newMovie: CreateItem): Promise <Item> {
    return prisma.items.findFirst({
        where: {
            name: {
                equals: newMovie.name,
                mode: 'insensitive',
            },
        },
    })
}

export async function getItemByIdDB(id: number): Promise<Item> {
    return prisma.items.findFirst({
        where: {id}
    })
}

export async function insertItemDB(newMovie: CreateItem): Promise<Item> {
    return prisma.items.create({
        data: newMovie
    })
}

export async function editItemDB(editedMovie: CreateItem, id: number): Promise<Item> {
    return prisma.items.update({
        data: editedMovie,
        where: {id}
    })
}

export async function deleteItemsDB(id: number): Promise<Item> {
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