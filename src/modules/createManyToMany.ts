import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            fk_id_course: "3f2ca149-e0e9-47c9-b0cb-4e74f1e89134",
            fk_id_module: "52abbdf6-5c7f-4f12-8129-94d7d6df6bc9",
        },
    });

    console.log(result);
}

main();