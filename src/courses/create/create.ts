import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 200,
            name: "Curso de NodeJS",
            description: "Curso muito bom",
            teacher: {
                connectOrCreate: {
                    where: {
                        name: "Wesley Oliveira"
                    },
                    create: {
                        name: "Wesley Oliveira"
                    }
                }
            }
        }
    })

    console.log(result);
}

main();