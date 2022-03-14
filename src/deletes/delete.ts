import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.delete({
        where: {
            id: "29944504-6a2a-4c4a-80d4-8025b31dbf39"
        }
    });

    console.log(result);
}

main();