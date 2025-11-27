import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export function Unauthenticated() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-md sm:max-w-lg lg:max-w-xl shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            Welcome to BackwordGmail
          </CardTitle>
          <CardDescription className="text-gray-500 mt-2 sm:text-base lg:text-lg">
            Please log in to view your emails from oldest to newest.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 mt-6 px-4 sm:px-6">
          <Button 
            onClick={() => navigate('/login')} 
            className="w-full py-3 sm:py-4 text-base sm:text-lg"
            variant="default"
          >
            Log In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
