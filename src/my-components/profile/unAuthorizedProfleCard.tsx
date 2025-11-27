import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"
import { Link } from "react-router-dom"

export default function UnauthorizedProfileCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-sm shadow-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-3">
            <Lock className="h-10 w-10 text-gray-500" />
          </div>
          <CardTitle className="text-lg">You’re Not Logged In</CardTitle>
          <CardDescription>
            Sign in to view your profile details.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center">
          <Button asChild className="w-full">
            <Link to="/login">Go to Login</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
