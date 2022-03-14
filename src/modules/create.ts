import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.modules.create({
        data: {
            description: "Aprendendo firebase do zero",
            name: "Aprendendo Firebase",
            courses: {
                create: {
                    courses: {
                        connect: {
                            id: "6ba6fb43-ce8c-44f5-9cb4-95873d536ce0",
                        },
                    },
                },
            },
        },
    });

    console.log(result);
}

main();