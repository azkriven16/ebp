"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const response = await fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const user = await response.json();
    console.log(user);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${
        !errors.email ? " gap-10 " : " gap-2 "
      }flex flex-col items-center py-20 my-10`}
    >
      <h1 className="font-bold text-xl">Create an account</h1>

      <input
        {...register("name", { required: "Name is required" })}
        type="text"
        placeholder="Name"
        className="input input-bordered w-full max-w-xs"
      />
      {errors.name && (
        <span className="text-red-500">{errors.name.message}</span>
      )}

      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
        type="email"
        placeholder="Email"
        className="input input-bordered w-full max-w-xs"
      />
      {errors.email && (
        <span className="text-red-500">{errors.email.message}</span>
      )}

      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        })}
        type="password"
        placeholder="Password"
        className="input input-bordered w-full max-w-xs"
      />
      {errors.password && (
        <span className="text-red-500">{errors.password.message}</span>
      )}

      <button
        type="submit"
        className="btn bg-anime text-white hover:bg-anime/90 min-w-[20rem]"
      >
        Create Account
      </button>
    </form>
  );
}
