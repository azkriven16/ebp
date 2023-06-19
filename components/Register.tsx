"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-5 py-20 my-10"
    >
      <h1 className="font-bold text-xl">Create an account</h1>
      {/* register your input into the hook by invoking the "register" function */}

      {/* include validation with required or other standard HTML validation rules */}
      <input
        {...register("exampleRequired", { required: true })}
        type="text"
        placeholder="Name"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        {...register("exampleRequired", { required: true })}
        type="email"
        placeholder="Email"
        className="input input-bordered w-full max-w-xs"
      />
      <input
        {...register("exampleRequired", { required: true })}
        type="password"
        placeholder="Password"
        className="input input-bordered w-full max-w-xs"
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <button
        type="submit"
        className="btn bg-anime text-white hover:bg-anime/90 min-w-[20rem]"
      >
        Create Account
      </button>
    </form>
  );
}
