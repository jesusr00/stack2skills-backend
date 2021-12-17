import { BaseEntity, Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
class RepositorySource extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  host: string;

  @Column()
  accessToken: string;

  @Column()
  type: string; // Aqui hay q cambiar a RepoType
}

export default RepositorySource;
