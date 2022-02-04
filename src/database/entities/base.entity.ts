import {
  BaseEntity as TypeOrmBaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

class BaseEntity extends TypeOrmBaseEntity {
  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}

export default BaseEntity;
