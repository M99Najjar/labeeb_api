import { Code } from 'src/codes/entities/code.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  maxNumber: number;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Code)
  code: Code;
}
