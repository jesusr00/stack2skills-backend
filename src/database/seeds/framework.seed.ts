import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { FrameworkEntity } from '../entities';

export class FrameworkSeeder implements Seeder {
  public async run(factory: Factory, connection: Connection) {
    await factory(FrameworkEntity)().createMany(3);
  }
}
