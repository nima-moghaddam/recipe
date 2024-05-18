import Button from "@/components/Button";
import BroccliSvg from "@/ui/BroccliSvg";
import DishSvg from "@/ui/DishSvg";
import FoodSvg from "@/ui/FoodSvg";
import GarlicSvg from "@/ui/GarlicSvg";
import TomatoSvg from "@/ui/TomatoSvg";

export default async function Home() {
  return (
    <section>
      <div className="relative flex h-full px-5 md:px-7 lg:px-[10%]">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <div className="mt-[30%] flex h-full flex-col items-center justify-center sm:mt-[20%]  md:mt-0 md:items-start">
            <p className="mb-1 text-4xl font-bold leading-[3rem]">
              Cooking Made Fun and Easy: Unleash Your Inner Chef
            </p>
            <p className="mb-3 w-2/3 text-xs font-light md:w-full">
              Discover more than 10,000 recipes in your hand with the best
              recipe. Help you to find the easiest way to cook.
            </p>
            <div>
              <Button name="Explore Recipes" classes="py-3 px-5 rounded-lg" />
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 md:block">
          <div className="flex h-full items-center justify-center">
            <DishSvg height="500" width="1000" />
          </div>
        </div>
        <div className="absolute left-[50%] top-10 md:top-5">
          <TomatoSvg />
        </div>
        <div className="absolute bottom-[-50%] right-[10%] md:bottom-5">
          <BroccliSvg />
        </div>
        <div className="absolute bottom-[-50%] left-[10%] md:bottom-7 md:left-[45%]">
          <GarlicSvg />
        </div>
      </div>
    </section>
  );
}
