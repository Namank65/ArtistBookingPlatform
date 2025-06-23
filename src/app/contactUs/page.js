import React from 'react'

const page = () => {
  return (
    <div>
      hey
    </div>
  )
}

export default page



// "use client";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

// const schema = yup.object().shape({
//   name: yup.string().required("Name is required"),
//   email: yup.string().email("Invalid email").required("Email is required"),
//   message: yup.string().min(10, "Message should be at least 10 characters").required("Message is required"),
// });

// export default function ContactPage() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting, isSubmitSuccessful },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log("Form submitted:", data);
//     alert("Message sent! (console logged)");
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-12">
//       <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white shadow-lg rounded-lg p-6">

//         {/* Name */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Name</label>
//           {/* <Input type="text" {...register("name")} /> */}
//           {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
//         </div>

//         {/* Email */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Email</label>
//           {/* <Input type="email" {...register("email")} /> */}
//           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
//         </div>

//         {/* Message */}
//         <div>
//           <label className="block text-sm font-medium mb-1">Message</label>
//           {/* <Textarea rows={5} {...register("message")} /> */}
//           {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
//         </div>
// {/* 
//         <Button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? "Sending..." : "Send Message"}
//         </Button> */}
//       </form>
//     </div>
//   );
// }
