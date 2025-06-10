import { prismaClient } from "../src";

const USER_ID = "4";

async function seed() {
  await prismaClient.user.create({
    data: {
      id: USER_ID,
      email: "test@test.com",
    },
  });

  const website = await prismaClient.website.create({
    data: {
      url: "https://test.com",
      userId: USER_ID,
    },
  });

  const validator = await prismaClient.validator.create({
    data: {
      publicKey: "0x12341223123",
      location: "Delhi",
      ipAddress: "127.0.0.1",
    },
  });

  await prismaClient.websiteTick.create({
    data: {
      websiteId: website.id,
      status: "GOOD",
      createdAt: new Date(),
      latency: 100,
      validatorId: validator.id,
    },
  });

  await prismaClient.websiteTick.create({
    data: {
      websiteId: website.id,
      status: "GOOD",
      createdAt: new Date(Date.now() - 1000 * 60 * 10),
      latency: 100,
      validatorId: validator.id,
    },
  });

  await prismaClient.websiteTick.create({
    data: {
      websiteId: website.id,
      status: "BAD",
      createdAt: new Date(Date.now() - 1000 * 60 * 20),
      latency: 100,
      validatorId: validator.id,
    },
  });
}

seed();
