import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";
import bcrypt from "bcrypt";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
class User {
  @prop({ required: true, trim: true })
  name: string;

  @prop({ required: true, trim: true })
  lastname: string;

  @prop({ required: true, unique: true })
  email: string;

  @prop({ required: true })
  password: string;

  @prop()
  image: string;

  async encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }
}

export default getModelForClass(User);
