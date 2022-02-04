import { Column, PrimaryGeneratedColumn, Entity, ManyToMany } from 'typeorm';
import BaseEntity from '../base.entity';
import Organization from '../organization/organization.entity';

@Entity()
class Account extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  profilePhoto: string;
}

export default Account;
