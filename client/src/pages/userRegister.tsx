import { useState } from "react";
import axios from "axios";
import TextInput from "../components/textInput";
import Button from "../components/button";

export const UserRegister = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/createUser", {
        email,
        first_name:firstname,
        last_name:lastname,
        username,
        password,
        birth_of_date:date,
        phone_number:phoneNumber,
      });
      console.log(response.status);
      alert("data berhasil disimpan");
    } catch (error) {
      console.error("Error", error);
      alert("gagal mengirim data");
    }
  };

  return (
    <>
      <div className="artboard phone-2 bg-slate-200 flex mx-auto align-middle justify-center rounded-2xl mt-10">
        <form onSubmit={handleSubmit}>
          <div className="mt-20 space-y-2">
            <TextInput
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <TextInput
              label="Firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Firstname"
            />
            <TextInput
              label="Lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Lastname"
            />
            <TextInput
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <TextInput
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <TextInput
              label="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
            />
            <TextInput
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
            />

            <Button
              text="Submit"
              type="submit"
              className="flex justify-self-end"
            />
          </div>
        </form>
      </div>
    </>
  );
};
