import Image from "next/image";
import ButtonUsage from "../components/ButtonUsage"
import Header from "@/components/HeaderUsage";

export default function Home() {
  return (
    <main >
      <Header/>
      <div>
        <div >
          <p>
            Get started by editing&nbsp;
            <code >src/app/page.tsx</code>
          </p>
        </div>
        <div >
          <Image
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <ButtonUsage/>
      </div>
      
    </main>
  );
}
