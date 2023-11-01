"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import PageLayout from "@/components/common/PageLayout";
import { API_URL_CREW } from "@/lib/urls";
import FallbackImage from "@/components/common/FallbackImage";
import BackButton from "@/components/common/BackButton";

type CastProp = {
  gender: number;
  name: string;
  birthday: string;
  image: {
    original: string;
  };
  country: {
    name: string;
    timezone: string;
  };
};

function Page() {
  const [cast, setCast] = useState<CastProp>();
  const params = useParams();
  const { back } = useRouter();

  const getCast = async () => {
    const res = await fetch(`${API_URL_CREW}/${params?.id}`);
    const payload = await res.json();
    setCast(payload);
  };

  useEffect(() => {
    getCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!cast) return "loading...";

  return (
    <PageLayout>
      <section className="max-w-3xl">
        <BackButton back={back} />
        <div className="flex flex-col sm:flex-row bg-[#fbfbfbed] rounded-md sm:h-[32rem]">
          <div className="flex-1 w-2xl">
            <FallbackImage
              src={cast?.image?.original}
              fallbackSrc="/fallback.jpeg"
              alt={cast.name}
              className=" object-fit w-full h-full"
              height={400}
              width={500}
              loading="lazy"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between p-4">
            <div className=" flex items-start space-x-4 rounded-md text-black ">
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <strong>Name:</strong> {cast.name}
                </p>
                <p className="text-sm font-medium leading-none">
                  <strong>Gender:</strong> {cast.gender}
                </p>
                <p className="text-sm font-medium ">
                  <strong>Country:</strong> {cast?.country?.name ?? "N/A"}{" "}
                  {cast?.country?.timezone}
                </p>
                <p className="text-sm font-medium ">
                  <strong>Birthday:</strong> {cast.birthday ?? "N/A"}
                </p>
                <p className="text-sm font-medium ">
                  <strong>Bio:</strong> Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default Page;
