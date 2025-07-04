import InterestsGrid from "@/components/interests/interestsGrid";
import interests from "@/app/onboarding/interests/interests_data";

export default function InterestsPage() {
  return (
    <main className="min-h-screen w-[393px] mx-auto text-black">
      <h1 className="text-xl font-bold bg-[#D9D9D9] text-center">ความสนใจ</h1>
      <h2 className="text-center">สามารถเลือกได้สูงสุด 5 ความสนใจ</h2>
      <InterestsGrid interests={interests} />
    </main>
  );
}
