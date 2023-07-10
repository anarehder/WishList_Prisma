import { deleteItemsDB, editItemDB, getItemsDB, getNumberOfItemsDB, insertItemDB } from "@/repository/items.repository";
import { notFoundError } from "@/errors/not-found-error";
import { CreateItem } from "@/protocols";


export async function getItemsServices(){
    const movies = await getItemsDB();
    if (!movies) {
        throw notFoundError(); // lança um erro para quem chamou essa função!
    }

    return movies;
}

export async function getNumberOfItemsServices(){
    const result = await getNumberOfItemsDB();
    if (!result) {
        throw notFoundError(); // lança um erro para quem chamou essa função!
    }

    return result;
}

export async function insertItemServices(newMovie:CreateItem){
    const result = await insertItemDB(newMovie);

    return result;
}

export async function editItemServices(editedMovie:CreateItem, id:number){
    const result = await editItemDB(editedMovie, id);

    return result;
}

export async function deleteItemServices(id:number){
    const result = await deleteItemsDB(id);

    return result;
}