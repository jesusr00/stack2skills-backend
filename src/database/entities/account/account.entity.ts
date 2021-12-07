import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

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
