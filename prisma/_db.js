const { PrismaClient } = require('@prisma/client')
//instantiate a single instance PrismaClient and save it on the globalThis object to prevent
// instantiating extra PrismaClient instances when in development 

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}


export const db = prisma;