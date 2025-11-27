type Token = {
  nextPageToken: string;
  length: number;
};

type Props = {
  activeToken: Token;
  pageNumber: number;
  paginationLength:number;
  changePageNumber: (newPageNumber: number) => void;
  fetchEmail: (pageNumber: number, pageToken: string | void) => void;
};

export function Pagination({
  fetchEmail,
  activeToken,
  changePageNumber,
  paginationLength,
  pageNumber,
}: Props) {
  const totalPages = Math.ceil(paginationLength / 30);

  const goToPage = (page: number) => {
    changePageNumber(page);
    fetchEmail(page, activeToken.nextPageToken);
  };

  return (
    <div className="bg-cyan-50 rounded-2xl shadow-sm py-4 px-2 flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-center items-center gap-3 text-base md:text-lg">

        {/* Prev */}
        <button
          onClick={() => pageNumber > 1 && goToPage(pageNumber - 1)}
          className={`px-3 md:px-4 py-2 rounded-md border transition 
            ${pageNumber === 1 
              ? "cursor-not-allowed opacity-40" 
              : "hover:bg-gray-200 cursor-pointer"
            }`}
        >
          Prev
        </button>

        {/* Page Numbers */}
        <div className="flex gap-2 overflow-x-auto max-w-full px-1 md:px-0 py-1 scrollbar-thin">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => goToPage(num)}
              className={`px-3 md:px-4 py-2 rounded-md transition-all hover:bg-gray-200 hover:rotate-3 whitespace-nowrap
                ${pageNumber === num ? "bg-gray-300 font-semibold" : ""}
              `}
            >
              {num}
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          onClick={() => pageNumber < totalPages && goToPage(pageNumber + 1)}
          className={`px-3 md:px-4 py-2 rounded-md border transition 
            ${pageNumber === totalPages
              ? "cursor-not-allowed opacity-40"
              : "hover:bg-gray-200 cursor-pointer"
            }`}
        >
          Next
        </button>

      </div>

  );
}
