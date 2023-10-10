import { useTranslation } from "@/app/i18n/client";
import { BusinessCard } from "./BusinessCard";

interface BusinessServicesProps {
  servicesRef: React.RefObject<HTMLDivElement>;
  it: boolean;
  ourservices: string;
  lng: string;
  contactRef: React.RefObject<HTMLDivElement>;
}

export const BusinessServices = ({
  servicesRef,
  it,
  ourservices,
  lng,
  contactRef,
}: BusinessServicesProps) => {
  const { t } = useTranslation(lng, "servicescards");
  return (
    <section
      className="flex-1 w-full z-10 bg-gray-100  text-gray-800"
      ref={servicesRef}
    >
      <div className="container mx-auto lg:h-screen md:h-screen sm:h-full text-center flex flex-col justify-evenly">
        <h1 className="text-2xl z-10 text-gray-800 font-semibold m-20 lg:m-0 sm:m-20 ">
          {ourservices}
        </h1>
        {it ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-[10%] gap-2  sm:gap-6 ">
            <BusinessCard
              title={t("titleit1")}
              content={t("descit1")}
              price={t("priceit1")}
              contactRef={contactRef}
            />

            <BusinessCard
              title={t("titleit2")}
              content={t("descit2")}
              price={t("priceit2")}
              contactRef={contactRef}
            />
            <BusinessCard
              contactRef={contactRef}
              title={t("titleit3")}
              content={t("descit3")}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2  sm:gap-20 ">
            <BusinessCard
              title={t("titledg1")}
              content={t("descdg1")}
              price={t("pricedg1")}
              contactRef={contactRef}
            />
            <BusinessCard
              title={t("titledg2")}
              content={t("descdg2")}
              price={t("pricedg2")}
              contactRef={contactRef}
            />
          </div>
        )}
      </div>
    </section>
  );
};
