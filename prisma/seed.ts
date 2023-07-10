//import prisma from "@/database/database.connection";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

    const checkOrCreateNetFlix = await prisma.streaming.upsert({
        where: {
            name: "NetFlix",
        },
        update: {},
        create: {
            name: "NetFlix",
        }
    })

    const checkOrCreatePrimeVideo = await prisma.streaming.upsert({
        where: {
            name: "PrimeVideo",
        },
        update: {},
        create: {
            name: "PrimeVideo",
        }
    })

    const checkOrCreateMovie = await prisma.type.upsert({
        where: { name: "Movie" },
        update: {},
        create: {
            name: "Movie",
        }
    })

    const checkOrCreateSerie = await prisma.type.upsert({
        where: { name: "Serie" },
        update: {},
        create: {
            name: "Serie",
        }
    })
    const checkOrCreateItem = await prisma.items.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: "Mistério em Paris",
            type_id: 1,
            streaming_id: 1,
            genre: "Comedy"
        }
    })
    console.log(checkOrCreateNetFlix, checkOrCreatePrimeVideo, checkOrCreateMovie, checkOrCreateSerie, checkOrCreateItem);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })