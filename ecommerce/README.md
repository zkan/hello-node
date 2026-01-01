# E-Commerce App

## Running and Accessing the Database (PostgreSQL)

Run the database:

```bash
mise r db
```

Access the database:

```bash
mise r psql
```

## Creating and Applying a Migration

```bash
./node_modules/.bin/prisma migrate dev --name CreateUsersTable
```

**Credit:** [Project in Prisma and NodeJS using
Typescript](https://www.youtube.com/playlist?list=PLaY6YJMqp51dW3zHhw0Iqy8hI86SKI8n-)
