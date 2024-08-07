import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
});

UserSchema.method("toJSON", function (this: any) {
  const { __v, _id, password, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

export const User = mongoose.model("User", UserSchema);

// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   UpdateDateColumn,
//   CreateDateColumn,
// } from "typeorm";

// @Entity()
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;
//   @Column()
//   name: string;
//   @Column()
//   email: string;

//   @Column()
//   password: string;

//   @CreateDateColumn()
//   createdAt: Date;

//   @UpdateDateColumn()
//   updatedAt: Date;
// }
