import { dataSource } from "../core/config/app-data-source";
import { User } from "../entities/user";
import bcrypt from "bcrypt";

export const createUser = async ({
  avatar,
  first_name,
  last_name,
  username,
  email,
  password,
  birth_of_date,
  phone_number,
}: Partial<User>) => {
  const userRepository = dataSource.getRepository(User);
  const user = new User();
  user.avatar = avatar!;
  user.first_name = first_name!;
  user.last_name = last_name!;
  user.username = username!;
  user.email = email!;
  user.password = await bcrypt.hash(password!, 10);
  user.birth_of_date = birth_of_date!;
  user.phone_number = phone_number!;

  if (
    !first_name ||
    !last_name ||
    !email ||
    !password ||
    !username ||
    !birth_of_date ||
    !phone_number
  ) {
    throw new Error("All required fields must be provided");
  }

  return await userRepository.save(user);
};

export const showAllUsers = async () => {
  const userRepository = dataSource.getRepository(User);

  return await userRepository.find();
};

export const showUserById = async (id: string) => {
  const userRepository = dataSource.getRepository(User);

  return await userRepository.findOneBy({ id });
};


