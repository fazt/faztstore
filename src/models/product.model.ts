import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
class Product {
  @prop()
  name: string;

  @prop()
  price: number;

  @prop()
  description: string;

  @prop()
  stock: number;

  @prop()
  image: string;

}

export default getModelForClass(Product);