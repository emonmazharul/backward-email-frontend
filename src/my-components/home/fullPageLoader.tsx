import { Spinner } from "@/components/ui/spinner";

export function FullScreenSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <Spinner className="w-16 h-16 text-cyan-600" />
        <p className="text-lg text-gray-700">Loading, please wait...</p>
      </div>
    </div>
  );
}

