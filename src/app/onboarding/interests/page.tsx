import InterestsGrid from "@/components/interests/interestsGrid";
import interests from "@/app/onboarding/interests/interests_data";

export default function InterestsPage() {
  return (
    <main className="min-h-screen w-[393px] mx-auto ">
      <h1 className="text-xl font-bold bg-[#D9D9D9] text-center py-4 mb-2">
        ความสนใจ
      </h1>
      <h2 className="mb-6">สามารถเลือกได้สูงสุด 5 ความสนใจ</h2>
      <InterestsGrid interests={interests} />
      <div className="flex items-center justify-center gap-2 mt-4">
        <input type="checkbox" name="accept" />
        <p>
          <span>ข้าพเจ้ายอมรับ</span>&nbsp;ข้อกำหนดและเงื่อนไขการให้บริการ
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button className="mx-auto w-[294px] bg-[var(--primary)] text-white font-bold py-2 mt-4  rounded-[var(--radius-lg)]">
          สร้างบัญชีใหม่
        </button>
      </div>
    </main>
  );
}
