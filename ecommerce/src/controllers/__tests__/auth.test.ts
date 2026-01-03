import { Request, Response } from "express"
import { login, signup } from "../../controllers/auth"

// Mock dependencies
jest.mock("../../lib/prisma", () => ({
  prisma: {
    user: {
      findFirst: jest.fn(),
      create: jest.fn()
    }
  }
}))

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(() => "mock_jwt_token")
}))

jest.mock("bcrypt", () => ({
  hashSync: jest.fn((password: string) => `hashed_${password}`),
  compareSync: jest.fn((password: string, hash: string) => password === "correct123")
}))

jest.mock("../../secrets", () => ({
  JWT_SECRET: "test_jwt_secret"
}))

import { prisma } from "../../lib/prisma"
import { sign } from "jsonwebtoken"

// Type assertions for mocks
const mockPrismaUser = prisma.user as jest.Mocked<typeof prisma.user>
const mockSign = sign as jest.Mock

describe("Auth Controller", () => {
  let mockReq: Partial<Request>
  let mockRes: Partial<Response>
  let mockJson: jest.Mock
  let mockStatus: jest.Mock

  beforeEach(() => {
    mockJson = jest.fn()
    mockStatus = jest.fn().mockReturnThis()
    mockReq = {}
    mockRes = {
      json: mockJson,
      status: mockStatus
    }
    jest.clearAllMocks()
  })

  describe("signup", () => {
    it("should create a new user successfully", async () => {
      const userData = { email: "test@example.com", password: "password123", name: "Test User" }
      const createdUser = { 
        id: 1, 
        ...userData, 
        password: "hashed_password123",
        createdAt: new Date(),
        updatedAt: new Date()
      }

      mockReq.body = userData
      mockPrismaUser.findFirst.mockResolvedValue(null)
      mockPrismaUser.create.mockResolvedValue(createdUser)

      await signup(mockReq as Request, mockRes as Response)

      expect(mockPrismaUser.findFirst).toHaveBeenCalledWith({ where: { email: userData.email } })
      expect(mockPrismaUser.create).toHaveBeenCalledWith({
        data: {
          name: userData.name,
          email: userData.email,
          password: "hashed_password123"
        }
      })
      expect(mockJson).toHaveBeenCalledWith(createdUser)
    })

    it("should throw error if user already exists", async () => {
      const userData = { email: "existing@example.com", password: "password123", name: "Existing User" }
      const existingUser = { 
        id: 1, 
        ...userData, 
        password: "hashed_password123",
        createdAt: new Date(),
        updatedAt: new Date()
      }

      mockReq.body = userData
      mockPrismaUser.findFirst.mockResolvedValue(existingUser)

      await expect(signup(mockReq as Request, mockRes as Response)).rejects.toThrow("User already exists!")
      expect(mockPrismaUser.create).not.toHaveBeenCalled()
    })
  })

  describe("login", () => {
    it("should login user successfully and return token", async () => {
      const userData = { email: "test@example.com", password: "correct123" }
      const existingUser = { 
        id: 1, 
        email: userData.email, 
        password: "hashed_password", 
        name: "Test User",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      const token = "mock_jwt_token"

      mockReq.body = userData
      mockPrismaUser.findFirst.mockResolvedValue(existingUser)

      await login(mockReq as Request, mockRes as Response)

      expect(mockPrismaUser.findFirst).toHaveBeenCalledWith({ where: { email: userData.email } })
      expect(mockSign).toHaveBeenCalledWith({ userId: existingUser.id }, "test_jwt_secret")
      expect(mockJson).toHaveBeenCalledWith({ user: existingUser, token })
    })

    it("should throw error if user does not exist", async () => {
      const userData = { email: "nonexistent@example.com", password: "password123" }

      mockReq.body = userData
      mockPrismaUser.findFirst.mockResolvedValue(null)

      await expect(login(mockReq as Request, mockRes as Response)).rejects.toThrow("User does not exist!")
      expect(mockSign).not.toHaveBeenCalled()
    })

    it("should throw error if password is incorrect", async () => {
      const userData = { email: "test@example.com", password: "wrongpassword" }
      const existingUser = { 
        id: 1, 
        email: userData.email, 
        password: "hashed_password", 
        name: "Test User",
        createdAt: new Date(),
        updatedAt: new Date()
      }

      mockReq.body = userData
      mockPrismaUser.findFirst.mockResolvedValue(existingUser)

      await expect(login(mockReq as Request, mockRes as Response)).rejects.toThrow("Incorrect password!")
      expect(mockSign).not.toHaveBeenCalled()
    })
  })
})
