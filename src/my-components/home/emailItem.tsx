import type { mailResponseType } from "@/utils/type";
import clsx from "clsx";

export function EmailItem({date,isRead,from,subject}:mailResponseType) {
  return (
    <div className="bg-indigo-50 py-3 px-6 shadow-sm border">
      <div className="w-full text-left mb-2 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">

        {/* FROM */}
        <div className="text-sm md:text-base break-words">
          {from.replace(/<.*?>/g, "").trim()}
        </div>

        {/* SUBJECT */}
        <div
          className={clsx(
            "flex-1 text-sm md:text-base break-words",
            isRead ? "text-gray-400" : "text-cyan-700 font-semibold"
          )}
        >
          {subject}
        </div>

        {/* DATE */}
        <div className="text-gray-500 text-xs md:text-sm whitespace-nowrap">
          {new Date(date).toDateString()}
        </div>

      </div>
    </div>
  );
}
