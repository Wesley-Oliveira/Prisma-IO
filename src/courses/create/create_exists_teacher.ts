import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 200,
            name: "Curso de PHP",
            description: "Curso muito bom",
            teacher: {
                connect: {
                    id: "eec41066-f563-4e93-8bf2-6af52cceb0cc"
                }
            }
        }
    })

    console.log(result);
}

main();