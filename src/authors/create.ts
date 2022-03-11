import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.authors.create({
        data: {
            name: "J. R. R. Tolkien",
            books: {
                createMany: {
                    data: [
                        { name: "O senhor dos anéis: a sociedade do anel" },
                        { name: "O senhor dos anéis: as duas torres" },
                        { name: "O senhor dos anéis: o retorno do rei" }
                    ]
                }
            }
        }
    })

    console.log(result);
}

main();