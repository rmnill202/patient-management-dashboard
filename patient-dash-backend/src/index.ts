import { Elysia, t } from "elysia";
import { swagger } from '@elysiajs/swagger'
import { authApiDetail, patientApiDetail, providerApiDetail, swaggerDocumentation } from "./constants/swagger";
import { PrismaClient } from '@prisma/client'

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
  .group("/auth", app => {
    return app
    .post("/login", () => "Login Route", authApiDetail)
    .post("/logout", () => "Logout Route", authApiDetail)
    .post("/register", () => "Register new provider account", authApiDetail)
  })
  .group("/api", app => app
    .get("/patients", async ({query: {
      count,
      page,
      searchString
    }}) => {
      /**
       * Parameters:
       *    count - How many results are returned
       *    searchString - A string that matches patient name
       *    page? - Which page we're on
       * 
       * Returns:
       *    currentPage - The current page
       *    finalPage - The final page with results
       *    results - An array of patient data
       */

      // Prevent unnecessary query if page requested goes beyond total page count
      const finalPage = Math.ceil(await prisma.patient.count() / count);
      if(page && finalPage > page) {
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
    .post("/patients", () => {
      const res = prisma.patient.create({
        data: {
          // id: number;
          // createdAt: Date;
          // lastUpdated: Date;
          // firstName: string;
          // middleName: string | null;
          // lastName: string;
          // dateOfBirth: Date;
          firstName: 'First Patient Name',
          lastName: 'Last patient name',
          dateOfBirth: new Date('01/01/2000'),
        }
      });
      return res;
    }, patientApiDetail)
    .get("/patients/:id", ({params: id}) => `GET Patient by ID ${id}`, patientApiDetail)
    .patch("/patients/:id", ({params: id}) => `PATCHing patient ${id}`, patientApiDetail)
    .get("/providers/:id", ({params: id}) => `GET provider by ID ${id}`, providerApiDetail)
  )
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
