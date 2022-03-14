import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.findMany({
        where: {
            id: "402e0447-0f9f-451b-bdce-f71df709c76f"
        },
        include: {
            modules: true,
        },
    });

    console.log(JSON.stringify(result));
}

main();