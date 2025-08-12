import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex-center flex h-full">
      <SignUp afterSignOutUrl="/" />
    </div>
  );
}
