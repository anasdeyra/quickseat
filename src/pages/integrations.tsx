import Head from "next/head";
import Image from "next/image";
import { INTEGRATIONS } from "../consts";

export default function Integration() {
  return (
    <div className="min-[1000px]:pt-32 pt-24 px-4 md:px-16 max-w-[1440px] mx-auto">
      <Head>
        <title>QuickSeat - Integrations</title>
        <meta
          name="description"
          content="Generate guest profiles automatically by using our APIs integrations with different platforms all in one place."
        />
      </Head>
      <h1 className="text-center font-bold text-3xl sm:text-2xl sm:max-w-2xl sm:mx-auto mt-8 text-primary">
        INTEGRATIONS
      </h1>
      <h2 className="text-lg text-primary font-medium text-center mt-2 max-w-lg mx-auto">
        Generate guest profiles automatically by using our APIs integrations
        with different platforms all in one place.
      </h2>
      <div className="flex flex-col mt-16 gap-8 md:gap-0">
        {INTEGRATIONS.map(({ description, image, title }, i) => (
          <div
            key={i}
            className="max-md:text-center flex justify-between gap-16 items-center md:even:flex-row-reverse md:even:text-end max-md:flex-col-reverse"
          >
            <div>
              <h3 className="text-2xl sm:text-xl text-primary font-bold">
                {title}
              </h3>
              <p className="text-primary text mt-2">{description}</p>
            </div>
            <Image
              src={image}
              alt={title}
              height={600}
              width={300}
              className="max-md:w-[150px] "
            />
          </div>
        ))}
      </div>
      <p className="text-primary font-medium text-center mt-16 max-w-[480px] mx-auto">
        There are many of integrations in the works right now! Get in touch with
        us to learn more and let us know which integrations are useful to you!
      </p>
    </div>
  );
}
