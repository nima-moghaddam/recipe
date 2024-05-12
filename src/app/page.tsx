import FoodSvg from "@/ui/FoodSvg";

export default async function Home() {
  return (
    <section>
      
      <div className="flex flex-col items-center justify-center pt-20 text-center">
        <div>
          <FoodSvg />
        </div>
        <h1 className="text-purple-500 font-extrabold text-[2rem]">
          Search for your food now...
        </h1>
      </div>
    </section>
  );
}
