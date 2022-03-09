import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 200,
            name: "Curso de Java",
            description: "Curso muito ruim",
            fk_id_teacher: "3caa1471-a87f-4033-85ad-3e46732a1246"
        }
    })

    console.log(result);
}

main();