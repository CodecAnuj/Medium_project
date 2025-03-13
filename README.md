# Draftly
Draftly is a modern blogging application inspired by platforms like Medium, designed to empower users to share their ideas and stories with the world.

## Tech Stack
### Frontend
- **React**: A JavaScript library for building user interfaces, providing a flexible and efficient way to create dynamic web applications.
- **Zod**: A TypeScript-first schema declaration and validation library, enabling robust type checking and validation of frontend data.
- **TypeScript**: A statically typed superset of JavaScript that enhances code quality, maintainability, and developer productivity.
- **JWT (JSON Web Tokens)**: A standard for securely transmitting information between parties as a JSON object, commonly used for authentication in web applications.

### Backend
- **Cloudflare Workers**: A serverless execution environment that allows you to run JavaScript code at the edge of the Cloudflare network, providing scalable and efficient backend logic. [Hono](https://hono.dev/top)
- **TypeScript**: Leveraged for backend development as well, ensuring consistent type safety and code integrity across the entire application.
- **Prisma**: A modern ORM (Object-Relational Mapping) tool that simplifies database access and manipulation, offering type-safe database queries and schema migrations. [Prisma](https://www.prisma.io/)
- **PostgreSQL**: A powerful open-source relational database management system, chosen for its reliability, scalability, and extensive feature set. [Aiven](https://aiven.io/)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/CodecAnuj/draftly.git
```
2. Navigate to the project directory:
```bash
cd draftly
```
3. Install dependencies for both the frontend and backend using Bun:
```bash
cd frontend
bun install
```
```bash
cd ../backend
bun install
```
4. Create a `.env` file inside `frontend` and `backend`.

   - Inside **frontend** `.env`:
    ```env
    VITE_BACKEND_URL="YOUR_BACKEND_URL_HERE"
    ```
    **Note:** Replace `YOUR_BACKEND_URL_HERE` with the actual backend URL when deploying.

   - Inside **backend** `.env`:
    ```env
    DATABASE_URL="PASTE DATABASE URL"
    JWT_SECRET="prod_mysecret"
    ```
    
    #### Creating Connection Pool
    - Move to [PRISMA](https://www.prisma.io/data-platform/accelerate) site, create a new Project, and click Enable Accelerate.
    - Under Database Connection String, paste the **Aiven** DB URL created initially.
    - Click ENABLE ACCELERATE, then Generate API KEY.
    - A URL is generated, which will be used inside the `wrangler.jsonc` file.

5. Create a `wrangler.jsonc` file inside `backend` and configure Cloudflare Workers:
    ```jsonc
    {
      "name": "backend",
      "compatibility_date": "2025-03-04",
      "vars": {
        "DATABASE_URL": "PASTE the PRISMA URL (Connection Pool)",
        "JWT_SECRET": "prod_mysecret"
      }
    }
    ```

6. Start the `backend` server using Cloudflare Workers:
```bash
bun run dev
```
7. Start the `frontend` development server:
```bash
bun run dev
```

- **NOTE** If you make changes in the database (i.e., `schema.prisma` file), you need to migrate using the following command:
```bash
bunx prisma migrate dev --name init_schema
```
- It will generate a migration folder inside `prisma`.
- Then generate the Prisma client:
```bash
bunx prisma generate --no-engine
```

Access the project in your browser at http://localhost:3000.

### To Deploy

```bash
bunx wrangler whoami
```
```bash
bunx wrangler login
```
```bash
bun run deploy
```

> Cloudflare Workers do not take environment variables from `.env` files; they take them from `wrangler.jsonc`.

> - This project demonstrates the usage of Cloudflare Workers and the need for a connection pool when connecting to a database.
> - Cloudflare Workers create multiple instances worldwide. Each instance connects to the database, which can be inefficient.
> - To resolve this, a connection pool is used via Prisma, which helps efficiently manage database connections.

