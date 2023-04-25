import { faker } from '@faker-js/faker';

faker.setLocale('es');

export const generateProducts = () => {
  return {
    title: faker.commerce.product(),
    description: faker.commerce.productDescription(),
    code:faker.random.numeric(15),
    price:faker.commerce.price(100),
    stock:faker.random.numeric(2),
  }
};