import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: 'd78a48b2-cb61-46ce-a627-a1c232e8ad81'
        },
        data: {
            duration: 700
        }
    });
    console.log(result);
}

main();