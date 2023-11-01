import React, { ChangeEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { X } from "lucide-react";

type Props = {
  clearSearch: () => void;
  searchKeyword: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
};

function Search({ searchKeyword, clearSearch, handleSearchChange }: Props) {
  return (
    <div className="flex w-full  max-w-full items-center space-x-0 rounded-md border border-input bg-background ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:space-x-2 sm:max-w-[600px]">
      <Input
        placeholder="Search..."
        onChange={handleSearchChange}
        value={searchKeyword}
        className="text-black border-0 outline-none"
      />
      <Button
        variant="ghost"
        onClick={clearSearch}
        className="mx-0 text-gray-700"
      >
        <X />
      </Button>
    </div>
  );
}

export default Search;
