// // import {useForm} from "react-hook-form"
// // import { zodResolver } from "@hookform/resolvers/zod"
// // import { loginSchema } from "../validation/login.schema"
// // import type {z} from "zod"

// // type LoginFormData = z.infer<typeof loginSchema>

// // function LoginForm() {
// //     const {
// //         register,
// //         handleSubmit,
// //         formState: {errors},
// //     } = useForm<LoginFormData>({
// //         resolver : zodResolver(loginSchema)
// //     })
// //     const onSubmit = (data : LoginFormData) => {
// //         console.log(data)
// //     }
// //     return (
// //         <form onSubmit={handleSubmit(onSubmit)}>
// //             <div>
// //                 <input type="email" placeholder="Enter email" {...register("email")}/>
// //                 {errors.email && <p>{errors.email.message}</p>}
// //             </div>
// //             <div>
// //                 <input
// //                 type="password"
// //                 placeholder="Enter Password"
// //                 {...register("password")}
// //                 />
// //                 {errors.password && <p>{errors.password.message}</p>}
// //             </div>
// //             <button type="submit">Login</button>
// //         </form>
// //     )
// // }

// // export default LoginForm;

// // import { useForm} from "react-hook-form"
// // import {zodResolver} from "@hookform/resolvers/zod"
// // import { useDispatch } from "react-redux"
// // import type {z} from "zod"

// // import { loginSchema } from "../validation/login.schema"
// // import { loginStart, loginSuccess,loginFailure } from "../store/authSlice"
// // import type { AppDispatch } from "../../../store/store"

// // type LoginFormData = z.infer<typeof loginSchema>

// // function LoginForm() {
// //     const dispatch = useDispatch<AppDispatch>()
// //     const {
// //         register,
// //         handleSubmit,
// //         formState : {errors},
// //     } = useForm<LoginFormData>({
// //         resolver: zodResolver(loginSchema),
// //     })
// //     const onSubmit = async (data:LoginFormData) => {
// //         try {
// //             dispatch(loginStart())
// //             await new Promise((resolver) => setTimeout(resolver,1000))
// //             const fakeUser = {
// //                 id : 1,
// //                 name : "Prathmesh",
// //                 email: data.email,
// //             }
// //             const fakeToken = "abc123token"
// //             dispatch (
// //                 loginSuccess({
// //                     user: fakeUser,
// //                     token : fakeToken,
// //                 })
// //             )
// //             console.log("Login Scess")
// //             console.log(data)
// //         }
// //         catch (error) {
// //             dispatch(loginFailure("Login failed"))
// //         }
// //     }
// // }
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useDispatch } from "react-redux";
// import type { z } from "zod";

// import { loginSchema } from "../validation/login.schema";
// import { loginStart, loginSuccess, loginFailure } from "../store/authSlice";
// import type { AppDispatch } from "../../../store/store";

// type LoginFormData = z.infer<typeof loginSchema>;

// function LoginForm() {
//   const dispatch = useDispatch<AppDispatch>();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormData>({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = async (data: LoginFormData) => {
//     try {
//       dispatch(loginStart());

//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       const fakeUser = {
//         id: 1,
//         name: "Prathmesh",
//         email: data.email,
//       };

//       const fakeToken = "abc123token";

//       dispatch(
//         loginSuccess({
//           user: fakeUser,
//           token: fakeToken,
//         }),
//       );

//       console.log("Login Success");
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         console.log(error.message);
//         dispatch(loginFailure(error.message));
//       } else {
//         dispatch(loginFailure("Login failed"));
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("email")} placeholder="Email" />
//       {errors.email && <p>{errors.email.message}</p>}

//       <input {...register("password")} type="password" placeholder="Password" />
//       {errors.password && <p>{errors.password.message}</p>}

//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default LoginForm;
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import type { z } from "zod";

import { loginSchema } from "../validation/login.schema";
import { loginStart, loginSuccess, loginFailure } from "../store/authSlice";
import type { AppDispatch } from "../../../store/store";

type LoginFormData = z.infer<typeof loginSchema>;

function LoginForm() {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      dispatch(loginStart());

      await new Promise((resolve) => setTimeout(resolve, 1000));

      let role: "student" | "teacher" | "admin" = "student";

      if (data.email.includes("admin")) {
        role = "admin";
      } else if (data.email.includes("teacher")) {
        role = "teacher";
      }

      const fakeUser = {
        id: 1,
        name: "Prathmesh",
        email: data.email,
        role,
      };

      const fakeToken = "abc123token";

      dispatch(
        loginSuccess({
          user: fakeUser,
          token: fakeToken,
        })
      );

      console.log("Login Success");
      console.log(fakeUser);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
        dispatch(loginFailure(error.message));
      } else {
        dispatch(loginFailure("Login failed"));
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} type="email" placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register("password")} type="password" placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;