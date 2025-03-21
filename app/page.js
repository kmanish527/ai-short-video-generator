import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>jdbwdkj</h1>
      <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
    <UserButton/>
    </div>
  );
}
