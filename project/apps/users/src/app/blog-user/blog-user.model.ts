import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User, UserRole } from '@project/shared/types';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class BlogUserModel extends Document implements User {
  @Prop()
  public avatar: string;

  @Prop({
    required: true,
  })
  public dateBirth: Date;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public firstname: string;

  @Prop({
    required: true,
  })
  public lastname: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop({
    required: true,
    type: String,
    enum: UserRole,
    default: UserRole.User,
  })
  public role: UserRole;

  @Prop({
    required: false,
  })
  public createdAt: number;

  @Prop({
    required: false,
  })
  public updatedAt: number;

}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel);