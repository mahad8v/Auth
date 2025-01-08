import { Document } from "mongoose";

export interface IUser extends Document {
  fullname: string;
  username: string;
  email: string;
  password: string;
  avatar: string;
  role: string;
  gender: string;
  mobile: string;
  address: string;
  website: string;
  token: string;
  isPasswordMatched: (enteredPassword: string) => Promise<boolean>;
  createPasswordResetToken: () => Promise<string>;
}
