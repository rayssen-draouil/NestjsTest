import { Entity, ObjectIdColumn, Column, BeforeInsert } from 'typeorm';

@Entity()
export class Post {
  @ObjectIdColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  createdAt: Date;

  @Column()
  description: string;

  @Column()
  status: boolean;

  //HOOK avant insertion
  @BeforeInsert()
  setStatusTrue() {
    this.status = true;
  }
}
