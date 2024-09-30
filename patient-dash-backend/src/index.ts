import { Elysia, t } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { authApiDetail, patientApiDetail, providerApiDetail, swaggerDocumentation } from "./constants/swagger";
import { PrismaClient } from '@prisma/client'
import cors from "@elysiajs/cors";

const prisma = new PrismaClient() 

// URL Structure: //
////////////////////
// auth/login
// auth/logout
// auth/register
// api/patients
  // GET
  // POST
// api/patients/:id
  // GET
  // PATCH
// api/providers/:id
  // GET

const app = new Elysia()
  .use(swagger({ documentation: swaggerDocumentation, provider: 'scalar' }))
  .use(cors({
    origin: 'http://localhost:5173'
  }))
  .group("/auth", app => {
    return app
    .post("/login", () => "Login Route", authApiDetail)
    .post("/logout", () => "Logout Route", authApiDetail)
    .post("/register", () => {
      // TODO - Replace with registration logic
      return "Register";
    }, authApiDetail)
  })
  .group("/api", app => app
    .get("/patients", async ({query: {
      count,
      page,
      searchString
    }}) => {
      // Prevent unnecessary query if page requested goes beyond total page count
      const finalPage = Math.ceil(await prisma.patient.count() / count);
      if(page && (page > finalPage)) {
        return {
          currentPage: finalPage,
          finalPage,
          results: []
        };
      }

      const res = await prisma.patient.findMany({
        take: count,
        skip: count * ((page || 1) - 1),
        ...(searchString ? {where: {
          OR: [
            {
              firstName: {
                contains: searchString,
                mode: 'insensitive'
              }
            },
            {
              lastName: {
                contains: searchString,
                mode: 'insensitive'
              }
            },
            {
              middleName: {
                contains: searchString,
                mode: 'insensitive'
              }
            }
          ]
        }} : {})
      });

      return {
        currentPage: page || 1,
        finalPage,
        results: res,
      }
    }, {
      ...patientApiDetail,
      query: t.Object({
        count: t.Number(),
        page: t.Optional(t.Number()),
        searchString: t.Optional(t.String()),
        filters: t.Optional(t.Array(
          t.Object({
            filterKey: t.String(),
            filterValue: t.String(),
          })
        ))
      })
    })
    .post("/patients", ({body: {
      firstName,
      lastName,
      dateOfBirth,
      middleName,
    }}) => {
      const res = prisma.patient.create({
        data: {
          firstName,
          lastName,
          dateOfBirth,
          ...(middleName ? { middleName } : {})
        }
      });
      return res;
    }, {
      ...patientApiDetail,
      body: t.Object({
        firstName: t.String(),
        lastName: t.String(),
        dateOfBirth: t.Date(),
        middleName: t.Optional(t.String())
      })
    })
    .get("/patients/:id", ({params: { id }}) => {
      return prisma.patient.findUnique({
        where: {
          id: id
        }
      })
    }, {
      ...patientApiDetail,
      params: t.Object({
        id: t.Number(),
      })
    })
    .patch("/patients/:id", ({params: id}) => {
      // TODO - Support adding arbitrary data, editing
    }, patientApiDetail)
    .get("/providers/:id", ({params: id}) => `GET provider by ID ${id}`, providerApiDetail)
  )
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
