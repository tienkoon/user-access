import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class UserAccess{
  @ObjectIdColumn()
  _id:string;
  
  @PrimaryColumn()
  featureName: string;

  @PrimaryColumn()
  email: string;

  @Column()
  enable: boolean
}