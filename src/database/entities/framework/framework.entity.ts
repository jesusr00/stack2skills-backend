import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import BaseEntity from '../base.entity';

@Entity()
class Framework extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  manifestPath: string;
}

export default Framework;
