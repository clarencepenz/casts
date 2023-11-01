"use client";
import CustomCard from "@/components/common/Card";
import PageLayout from "@/components/common/PageLayout";
import Search from "@/components/common/Search";
import CustomSkeleton from "@/components/common/Skeleton";
import { API_URL_CREWS } from "@/lib/urls";
import Link from "next/link";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

type CastsProp = {
  type: string;
  person: {
    id: number;
    name: string;
    image: {
      original: string;
    };
  };
}[];

export default function Home() {
  const [casts, setCasts] = useState<CastsProp>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [filteredCompanies, setFilterCompanies] = useState<CastsProp>([]);

  useEffect(() => {
    fetch(API_URL_CREWS)
      .then((res) => res.json())
      .then((data) => setCasts(data));
  }, []);

  const filterCompanies = useCallback(() => {
    let tempCompanies = [...casts];
    if (searchKeyword.trim().length) {
      tempCompanies = tempCompanies.filter((a) => {
        const companiesMatch =
          searchKeyword.trim().length &&
          a?.person.name?.toLowerCase().includes(searchKeyword.toLowerCase());

        return companiesMatch;
      });
    }
    setFilterCompanies([...tempCompanies]);
  }, [searchKeyword, casts]);

  useEffect(() => {
    if (casts) {
      setFilterCompanies([...casts]);
      filterCompanies();
    }
  }, [filterCompanies, casts]);

  useEffect(() => {
    filterCompanies();
  }, [filterCompanies, searchKeyword]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const clearSearch = () => {
    setSearchKeyword("");
  };

  return (
    <PageLayout>
      <section className=" min-h-[200px] flex flex-col justify-center items-center mx-0 lg:mx-[5rem]">
        <h1 className="text-white font-bold text-[1.7rem] md:text-[3rem] text-center">
          Welcome to the shades of casts; you or I may know
        </h1>
        <h6 className="text-muted-foreground my-4 text-[14px] md:text-[18px] text-center">
          Say your peace because that&lsquo;s all you&lsquo;ve got
        </h6>
      </section>
      <Search
        searchKeyword={searchKeyword}
        clearSearch={clearSearch}
        handleSearchChange={handleSearchChange}
      />
      <div className="gap-4 font-mono text-sm grid grid-cols-1 w-full sm:grid-cols-2 xl:grid-cols-3">
        {casts?.length === 0 ? (
          <Loading />
        ) : (
          filteredCompanies?.map((items, index) => (
            <Link key={index} href={`/casts/${items.person.id}`}>
              <CustomCard item={items} />
            </Link>
          ))
        )}
      </div>
    </PageLayout>
  );
}

function Loading() {
  return Array.from({ length: 5 }).map((_, i) => <CustomSkeleton key={i} />);
}
