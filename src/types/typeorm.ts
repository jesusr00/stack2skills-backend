import { FindConditions, ObjectLiteral } from 'typeorm';
import BaseEntity from '~/database/entities/base.entity';

type WhereExpression<T extends BaseEntity> =
  | FindConditions<T>[]
  | FindConditions<T>
  | ObjectLiteral
  | string;

export { WhereExpression };
