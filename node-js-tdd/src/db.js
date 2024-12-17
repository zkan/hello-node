import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getThemeById(id) {
    return await prisma.theme.findUnique({
        where: {
            id: id
        }
    })
}