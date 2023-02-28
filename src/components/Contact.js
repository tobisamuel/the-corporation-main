import emailjs from "@emailjs/browser";
import * as React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const sendEmail = (formData) => {
    emailjs
      .send(
        "service_ok42g0r",
        "template_rt19siq",
        formData,
        "y3_XQvadBkmH3XsMz"
      )
      .then(
        (result) => {
          toast.custom((t) => {
            return (
              <div
                class={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } relative w-full bg-white shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden`}>
                <div class="p-6 md:p-10 flex flex-col items-center text-center">
                  <p class="text-lg md:text-xl font-medium mb-3">
                    Message sent successfully
                  </p>
                  <button
                    type="button"
                    class="bg-black font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mx-auto px-8 py-2 inline-block"
                    onClick={() => toast.dismiss(t.id)}>
                    Dismiss
                  </button>
                </div>
              </div>
            );
          });
          reset();
        },
        (error) => {
          toast.custom((t) => {
            return (
              <div
                class={`${
                  t.visible ? "animate-enter" : "animate-leave"
                } relative w-full bg-red-200 pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden`}>
                <div class="p-6 md:p-10 flex flex-col items-center text-center">
                  <p class="text-lg md:text-xl font-medium mb-3">
                    Message could not be sent, please try again later
                  </p>
                  <button
                    type="button"
                    class="bg-black font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mx-auto px-8 py-2 inline-block"
                    onClick={() => toast.dismiss(t.id)}>
                    Dismiss
                  </button>
                </div>
              </div>
            );
          });
          console.error(error.text);
        }
      );
  };

  return (
    <>
      <form
        action="#"
        method="POST"
        className="w-full md:w-1/2 bg-white mx-auto pt-10"
        onSubmit={handleSubmit(sendEmail)}>
        <div className="overflow-hidden">
          <div className="bg-white">
            <h4 className="text-xl font-bold uppercase mb-6 text-center">
              Leave us a message
            </h4>
            <div className="grid grid-cols-6 gap-6 mb-5">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="user_name"
                  className={`block text-sm font-medium text-gray-700 ${
                    errors.user_name && "text-red-500"
                  }`}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  defaultValue=""
                  {...register("user_name", { required: true })}
                  autoComplete="given-name"
                  className={`mt-1 block w-full rounded-md border-0 border-b border-gray-300 focus:border-black focus:ring-black md:text-base font-medium ${
                    errors.user_name && "border-red-500 focus:border-red-500"
                  }`}
                />
                {errors.user_name && (
                  <span className="text-sm text-red-500 font-medium">
                    This field is required
                  </span>
                )}
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="user_email"
                  className={`block text-sm font-medium text-gray-700 ${
                    errors.user_email && "text-red-500"
                  }`}>
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  defaultValue=""
                  {...register("user_email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  autoComplete="email"
                  className={`mt-1 block w-full rounded-md border-0 border-b border-gray-300 focus:border-black focus:ring-black md:text-base font-medium ${
                    errors.user_email && "border-red-500 focus:border-red-500"
                  }`}
                />
                {errors.user_email && (
                  <span className="text-sm text-red-500 font-medium">
                    This field is required
                  </span>
                )}
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium text-gray-700 ${
                    errors.message && "text-red-500"
                  }`}>
                  Your Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    defaultValue=""
                    {...register("message", { required: true })}
                    rows={3}
                    className={`mt-1 block w-full border-gray-300 shadow-sm focus:border-black focus:ring-black md:text-base font-medium ${
                      errors.message && "border-red-500 focus:border-red-500"
                    }`}
                  />
                  {errors.message && (
                    <span className="text-sm text-red-500 font-medium">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center pb-8">
            <button
              type="submit"
              className="inline-flex justify-center border border-transparent bg-black py-4 px-6 font-bold text-sm uppercase text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default Contact;
