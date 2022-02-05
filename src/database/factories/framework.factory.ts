import { Faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { FrameworkEntity } from '../entities';

define(FrameworkEntity, (faker: Faker): FrameworkEntity => {
  const entity = new FrameworkEntity();
  entity.description = faker.lorem.words(10);
  entity.name = faker.lorem.words(2);
  entity.manifestPath = './package.json';
  return entity;
});
