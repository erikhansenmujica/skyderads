"use client";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { use, useEffect, useRef, useState } from "react";
import { Spinner } from "../Spinner";
import { SuccessModal } from "../Modals/SuccessModal";
import { useTranslation } from "@/app/i18n/client";
interface FinalContactSection {
  contactRef: React.RefObject<HTMLDivElement>;
  lng: string;
}
export const FinalContactSection = ({
  contactRef,
  lng,
}: FinalContactSection) => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const labelStyle =
    "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary";
  const labelStyleWcontent =
    "pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out -translate-y-[1.5rem] scale-[0.8] text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary";
  const onChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email && formData.name) {
      setLoading(true);
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current!,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
        .then((response) => {
          console.log(response.text);
          setLoading(false);
          setError(false);
          setSuccess(true);
          //@ts-ignore
          gtag("event", "conversion", {
            send_to: "AW-638912286/gQFoCOmXxugYEJ6O1LAC",
          });
        })
        .catch((error) => {
          console.log(error.text);
          setLoading(false);
          setError(true);
          setSuccess(false);
        });
    } else {
    }
  };
  const { t } = useTranslation(lng, "contactform");
  return (
    <section
      className="flex-1 w-full py-10 bg-black py-16 text-gray-100 z-10"
      ref={contactRef}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">{t("contacttitle")}</h2>
        <p className="text-lg mb-8">{t("contactsubtitle")}</p>
        <div className="container my-24 mx-auto md:px-6">
          <section className="mb-32">
            <div className="flex flex-wrap">
              <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                <h2 className="mb-6 text-3xl font-bold">{t("contactus")}</h2>
                <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                  {t("contactdescription")}
                </p>
                <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                  + 351 911 561 225
                </p>
                <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                  skyderadvertising@gmail.com
                </p>
                <div className="w-full flex justify-center">
                  <Image
                    src={"/logo.png"}
                    width={"150"}
                    height={"10"}
                    alt=""
                    className="mt-[15%]"
                  ></Image>
                </div>
              </div>

              <div className="mb-12 w-full rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6 flex flex-col justify-center">
                {loading ? (
                  <Spinner />
                ) : (
                  <form
                    className="m-12 "
                    onChange={onChange}
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="text"
                        required
                        className="peer border-2 border-yellow-400 block min-h-[auto] w-full rounded  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                      <label
                        className={
                          formData.name ? labelStyleWcontent : labelStyle
                        }
                        htmlFor="exampleInput90"
                      >
                        {t("name")}
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="email"
                        required
                        className="peer border-2  border-yellow-400 block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="email"
                        name="email"
                        placeholder="Email address"
                      />
                      <label
                        className={
                          formData.email ? labelStyleWcontent : labelStyle
                        }
                        htmlFor="exampleInput91"
                      >
                        {t("emailaddress")}
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="number"
                        className="peer border-2  border-yellow-400 block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="phone"
                        name="phone"
                        placeholder="Email address"
                      />
                      <label
                        className={
                          formData.phone ? labelStyleWcontent : labelStyle
                        }
                        htmlFor="exampleInput91"
                      >
                        {t("phonenumber")}
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <textarea
                        className="peer border-2 border-yellow-400 block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Your message"
                      ></textarea>
                      <label
                        htmlFor="message"
                        className={
                          formData.message ? labelStyleWcontent : labelStyle
                        }
                      >
                        {t("message")}
                      </label>
                    </div>

                    <button
                      type="submit"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      className="mb-6 inline-block w-full rounded-xl  px-6 pt-2.5 pb-2 text-lg font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-1px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:scale-105 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600  focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:scale-100 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                    >
                      {t("send")}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      <SuccessModal showModal={success} setShowModal={setSuccess} />
    </section>
  );
};
