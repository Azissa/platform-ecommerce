import { dataSource } from "../core/config/app-data-source";
import { User } from "../entities/user";

export const createUser = async ({
  avatar,
  first_name,
  last_name,
  username,
  email,
  password,
  birth_of_date,
}: Partial<User>) => {
  const userRepository = dataSource.getRepository(User);
  const user = new User();
  user.avatar = avatar!;
  user.first_name = first_name!;
  user.last_name = last_name!;
  user.username = username!;
  user.email = email!;
  user.password = password!;
  user.birth_of_date = birth_of_date!;

  if (!first_name || !last_name || !email || !password || !username) {
    throw new Error("All required fields must be provided");
  }

  return await userRepository.save(user);
};

export const showAllUsers = async({});
