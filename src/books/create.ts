import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.books.create({
        data: {
            name: "J. R. R. Tolkien",
            author_id: "51d38299-ba1d-4d26-a92a-2b0f2e635ba6"
        }
    })

    console.log(result);
}

main();