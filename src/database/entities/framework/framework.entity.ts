import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

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
