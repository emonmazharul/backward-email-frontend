import { cn } from "@/lib/utils";
import type { SingleToken } from '@/utils/type';

interface SidebarProps {
  tokens: Array<{ nextPageToken: string, length: number }>;
  activeToken: SingleToken;
  handleActiveToken: (token: SingleToken) => void;
  fetchEmail: (pageNumber: number, pageToken: string | void) => void;
  changePageNumber: (newPageNumber: number) => void;
  isTokenDataLoading: boolean;
  paginationLength: number;
  isEmailDataLoading: boolean;
}

interface SidebarLoaderProps {
  numItems?: number;
}

const SidbarLoader = ({ numItems = 10 }: SidebarLoaderProps) => {
  return (
    <div className="h-full w-full md:w-64 border-r mt-14 bg-white p-4">
      <div className="h-6 w-32 bg-gray-200 rounded-md mb-4 animate-pulse"></div>

      <div className="overflow-y-auto h-[calc(100vh-80px)]">
        <div className="flex flex-col gap-2 bg-blue-50 px-2 py-4 rounded-lg">
          {Array.from({ length: numItems }).map((_, i) => (
            <div
              key={i}
              className="h-10 bg-gray-300 rounded-lg w-full animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Sidebar({
  tokens,
  activeToken,
  isTokenDataLoading,
  paginationLength,
  isEmailDataLoading,
  handleActiveToken,
  fetchEmail,
  changePageNumber
}: SidebarProps) {

  const handleTokenAndEmailChange = async (token: SingleToken) => {
    handleActiveToken(token);
    changePageNumber(1);
    fetchEmail(1, token.nextPageToken);
  };

  if (isTokenDataLoading) {
    return <SidbarLoader numItems={10} />;
  }

  return (
    <div className="
      h-full
      md:mt-2 
      w-full md:w-64 
      border-r bg-white p-4 
      overflow-hidden
      flex-shrink-0
    ">
      <h2 className="text-xl font-semibold mb-6">Pages</h2>

      {/* Container that scrolls vertically on desktop, horizontally on mobile */}
      <div className="md:h-[calc(100vh-80px)] overflow-y-auto">

        {/* MOBILE: horizontal */}
        <div className="md:hidden overflow-x-auto">
          <div className="flex flex-row gap-2 bg-blue-50 px-2 py-4 rounded-lg w-max">
            {tokens.map((token: any, i: number) => (
              <button
                key={i}
                onClick={() => handleTokenAndEmailChange(token)}
                className={cn(
                  "min-w-fit px-4 py-2 rounded-lg transition text-blue-950",
                  activeToken.nextPageToken === token.nextPageToken
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                )}
              >
                Page {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* DESKTOP: vertical */}
        <div className="hidden md:flex md:flex-col gap-2 bg-blue-50 px-2 py-6 rounded-lg">
          {tokens.map((token: any, i: number) => (
            <button
              key={i}
              onClick={() => handleTokenAndEmailChange(token)}
              className={cn(
                "w-full text-left px-4 py-2 rounded-lg transition text-blue-950",
                activeToken.nextPageToken === token.nextPageToken
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              )}
            >
              {activeToken.nextPageToken === token.nextPageToken
                ? isEmailDataLoading
                  ? "Loading..."
                  : `Page ${i + 1} (${paginationLength} messages)`
                : `Page ${i + 1}`}
            </button>
          ))}
        </div>
        <div className="ml-2 mt-3 text-sm text-gray-600 whitespace-nowrap md:hidden">
          {paginationLength ? `${paginationLength} messages` : ""}
        </div>
      </div>
    </div>
  );
}
