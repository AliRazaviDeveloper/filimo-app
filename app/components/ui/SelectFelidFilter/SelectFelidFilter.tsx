"use client";

import { Dispatch, SetStateAction, useState } from "react";

type SelectFieldFilterProps = {
  title: string;
  options: {
    label: string;
    value: string;
  }[];
  row?: boolean;
  type: "checkbox" | "radio";
  selectedOptions?: string[] | string;
  setSelectedOptions?: Dispatch<SetStateAction<string[]>>;
};

const SelectFieldFilter = (props: SelectFieldFilterProps) => {
  const { title, options, row, type, selectedOptions, setSelectedOptions } =
    props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option: string) => {
    if (type === "checkbox") {
      setSelectedOptions?.((prev) =>
        prev.includes(option)
          ? prev.filter((opt) => opt !== option)
          : [...prev, option]
      );
    } else if (type === "radio") {
      setSelectedOptions?.([option]);
    }
  };

  return (
    <div className="relative flex-1">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border-2 border-[#818181] py-3 mb-1 px-4 cursor-pointer placeholder:text-slate-50 rounded-md flex-1 text-slate-50 mt-10 flex flex-row items-center justify-between"
      >
        <span className="font-semibold text-gray-100 text-sm">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`size-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {isOpen && (
        <div
          className={`absolute top-full left-0 w-full z-10 py-4 px-4 mt-1 bg-[#1e1e1e] text-slate-100 text-sm rounded-md shadow-lg ${
            row ? "grid grid-cols-2 gap-3" : "flex flex-col gap-y-3"
          }`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center gap-2 py-1 cursor-pointer"
              onClick={() => toggleOption(option.value)}
            >
              <div
                className={`w-5 h-5 rounded-sm border-2 flex items-center justify-center ${
                  selectedOptions?.includes(option.value)
                    ? "bg-[#FFD700] border-[#FFD700]"
                    : "bg-transparent border-[#818181]"
                }`}
              >
                {selectedOptions?.includes(option.value) && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="black"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                )}
              </div>
              <span className="text-gray-300">{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectFieldFilter;
