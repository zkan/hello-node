import { Request, Response } from "express"
import { hashSync } from "bcrypt"
import { prisma } from "../lib/prisma"

export const login = (req: Request, res: Response) => {
  res.send("Login")
}

export const signup = async (req: Request, res: Response) => {
  const { email, password, name } = req.body

  console.log(name, email, password)

  let user = await prisma.user.findFirst({ where: { email } })
  if (user) {
    throw Error("User already exists!")
  }
  user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashSync(password, 10)
    }
  })
  res.json(user)

  await prisma.$disconnect()
}
