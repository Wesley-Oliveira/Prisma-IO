import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            courses: {
                create: {
                    duration: 200,
                    name: "Curso de NodeJS 2",
                    description: "Curso completo de NodeJS",
                    fk_id_teacher: "78970e1c-087a-44d6-af91-7ebf125a45fd",
                },
            },
            modules: {
                create: {
                    description: "Curso completo de PrismaIO",
                    name: "PrismaIO",
                },
            },
        },
    });

    console.log(result);
}

main();