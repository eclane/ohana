"use client";
import { Onest } from "next/font/google";
import "../globals.css";
import { useSession } from "next-auth/react";
import LoadingScreen from "@/components/loading";
import { useRouter } from "next/navigation";

const oneset = Onest({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const { session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <LoadingScreen />;
  }

//   if (!session) {
//     router.push("/login");
//   }

  console.log(session);
  return (
    <html lang="en">
      <body className={oneset.className}>{children}</body>
    </html>
  );
}
