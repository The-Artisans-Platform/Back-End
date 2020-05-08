import { PasswordInput } from "./PasswordInput";
import { Field, InputType } from "type-graphql";
import { DoesUsernameAlreadyExist } from "./validators/doesUsernameExist";
import { DoesEmailAlreadyExist } from "./validators/doesEmailExist";
import { IsThatReallyAnEmail } from "./validators/isThatAnEmail";
import { FirstNamePresence } from "./validators/isFirstNamePresent";
import { LastNamePresence } from "./validators/isLastNamePresent";

@InputType()
export class RegisterInput extends PasswordInput {
  @Field()
  @FirstNamePresence({ message: "You forgot to put in a username. 😒" })
  @DoesUsernameAlreadyExist({
    message: "That username is already in use! 💩",
  })
  firstName: string;

  @Field()
  @LastNamePresence({ message: "You forgot to put in a username. 😒" })
  @DoesUsernameAlreadyExist({
    message: "That username is already in use! 💩",
  })
  lastName: string;

  @Field({ nullable: true })
  @IsThatReallyAnEmail({
    message: "I'm not gunna lie, I don't think that's a real email. 🛑",
  })
  @DoesEmailAlreadyExist({ message: "That email is already in use! 💩" })
  email: string;

  @Field({ nullable: true })
  tzAbv: string;

  @Field({ nullable: true })
  tzName: string;

  @Field({ nullable: true })
  artisan: boolean;
}
