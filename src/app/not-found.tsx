import { Button } from "@/components/ui/button"
import { MdErrorOutline } from "react-icons/md";
import Link from "next/link"

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-white px-4">
      <div className="text-center">
        <MdErrorOutline className="w-24 h-24 mb-8 mx-auto text-white" />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-xl mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>
        <div className="space-y-4">
          <Button asChild className="bg-white  text-black hover:bg-gray-200">
            <Link href="/">Go Back Home</Link>
          </Button>
          
        </div>
      </div>
   
    </div>
  )
}