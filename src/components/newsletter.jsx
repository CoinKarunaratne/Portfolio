import { useState } from "react";
import { motion } from "framer-motion";
import Mailchimp from "./mailchimp";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export default function () {
  const postUrl = `https://gmail.us12.list-manage.com/subscribe/post?u=6b4f825f73669a433b4c2a6e7&amp;id=43cde1e72e&amp;f_id=00d2b8e0f0`;

  return (
    <section id="newsletter" className="mb-[-170px] relative z-20">
      <div className="bg-white rounded-[64px] mx-[10%] p-[50px] lg:p-[100px] flex lg:flex-row flex-col gap-4 basis-3 h-auto">
        <h1 className="text-black font-bold leading-[1] md:text-center lg:text-left text-[20px] lg:text-[35px] basis-1/3 lg:pr-[50px]">
          Subscribe to our Newletter and Never miss latest updates
        </h1>

        <MailchimpSubscribe
          className="basis-2/3 flex grow px-auto sm:px-10"
          url={postUrl}
          render={({ subscribe, status, message }) => (
            <Mailchimp
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    </section>
  );
}
