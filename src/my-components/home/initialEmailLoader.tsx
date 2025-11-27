import { ErroMessage } from "./errorMessage";
interface EmailItemLoaderProps {
  itemProps?: number; // number of skeleton items to show
}



export function InitialEmailLoader({ itemProps = 10 }: EmailItemLoaderProps) {
  return (
    <div className="flex flex-col gap-3 mb-4">
      <ErroMessage/>
      {Array.from({ length: itemProps }).map((_, i) => (
        <div
          key={i}
          className="bg-indigo-50 py-3 px-6 shadow-sm border rounded-md animate-pulse"
        >
          <div className="flex gap-4 w-full items-center">
            {/* Sender */}
            <div className="h-4 w-24 bg-gray-300 rounded"></div>

            {/* Subject */}
            <div className="flex-1 h-4 bg-gray-300 rounded"></div>

            {/* Date */}
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
