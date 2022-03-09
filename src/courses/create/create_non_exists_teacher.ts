import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 200,
            name: "Curso de Elixir",
            description: "Curso muito bom",
            teacher: {
                create: {
                    name: "José Fábio"
                }
            }
        }
    })

    console.log(result);
}

main();