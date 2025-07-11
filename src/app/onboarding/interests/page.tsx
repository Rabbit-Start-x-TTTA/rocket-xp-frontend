import InterestsGrid from "@/components/interests/interestsGrid";
import interests from "@/app/onboarding/interests/interests_data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function InterestsPage() {
  return (
    <main className="min-h-screen max-w-[393px] mx-auto">
      <h1 className="text-xl font-bold bg-[#D9D9D9] text-center py-4 mb-2">
        ความสนใจ
      </h1>
      <section className="mx-5">
        <h2 className="mb-6">สามารถเลือกได้สูงสุด 5 ความสนใจ</h2>
        <InterestsGrid interests={interests} />
        <div className="flex items-center justify-center gap-2 mt-4 text-sm">
          <Checkbox id="accept" className="h-4 w-4" defaultChecked={false} />
          <p>
            <span className="opacity-70">ข้าพเจ้ายอมรับ</span>
            &nbsp;
            <Link href="#" className="hover:underline">
              ข้อกำหนดและเงื่อนไขการให้บริการ
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center  mt-4">
          <Button className="w-full max-w-[294px] bg-[var(--primary)] text-white py-2  rounded-[var(--radius-lg)]">
            สร้างบัญชีใหม่
          </Button>
        </div>
      </section>
    </main>
  );
}
