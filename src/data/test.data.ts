import { faker } from '@faker-js/faker';

export const generateFakeUser = () => ({
    username: faker.internet.username(),
    password: faker.internet.password(),
});