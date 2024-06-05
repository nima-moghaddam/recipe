import { numArrayCreator } from "@/utils/functions/numArrayCreator";

export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="mb-3 h-8 w-1/6 rounded bg-slate-200"></div>
      <div className="mb-5 flex w-full justify-between border-b border-slate-200 pb-7">
        <div className="flex flex-wrap">
          <div className="mb-2 mr-2 h-7 w-32 rounded bg-slate-200"></div>
          <div className="mb-2 mr-2 h-7 w-32 rounded bg-slate-200"></div>
          <div className="mb-2 mr-2 h-7 w-32 rounded bg-slate-200"></div>
          <div className="mb-2 mr-2 h-7 w-32 rounded bg-slate-200"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="mb-2 mr-2 h-7 w-7 rounded bg-slate-200"></div>
          <div className="mr-2 h-7 w-7 rounded bg-slate-200"></div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 md:gap-8">
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="h-[400px] w-full rounded bg-slate-200"></div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <div className="h-[400px] w-full rounded bg-slate-200"></div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="mb-3 h-4 w-1/6 rounded bg-slate-200"></div>
          <div className="mb-10 flex flex-wrap border-b border-slate-200 pb-5">
            {numArrayCreator(20).map((num) => (
              <div
                key={num}
                className="mb-2 mr-2 h-7 w-24 rounded bg-slate-200"
              ></div>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <div className="mb-2 mr-2 h-14 w-32 rounded bg-slate-200"></div>
            <div className="mb-2 mr-2 h-14 w-32 rounded bg-slate-200"></div>
            <div className="mb-2 mr-2 h-14 w-32 rounded bg-slate-200"></div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-8">
          {numArrayCreator(5).map((num) => (
            <div
              key={num}
              className="mb-5 h-24 w-full rounded bg-slate-200"
            ></div>
          ))}
        </div>
        <div className="col-span-12 mb-5 md:col-span-6 lg:col-span-4">
          <div className="mb-3 h-4 w-1/6 rounded bg-slate-200"></div>
          <div className="mb-5">
            {numArrayCreator(10).map((num) => (
              <div
                key={num}
                className="mb-5 h-4 w-full rounded bg-slate-200"
              ></div>
            ))}
          </div>
          <div className="mb-3 h-4 w-1/6 rounded bg-slate-200"></div>
          <div className="flex flex-wrap">
            <div className="mb-2 mr-2 h-7 w-24 rounded bg-slate-200"></div>{" "}
            <div className="mb-2 mr-2 h-7 w-24 rounded bg-slate-200"></div>{" "}
            <div className="mb-5 mr-2 h-7 w-24 rounded bg-slate-200"></div>
          </div>
          <div className="mb-3 h-4 w-1/6 rounded bg-slate-200"></div>

          <div className="flex flex-wrap">
            <div className="mb-2 mr-2 h-7 w-24 rounded bg-slate-200"></div>{" "}
            <div className="mb-2 mr-2 h-7 w-24 rounded bg-slate-200"></div>{" "}
            <div className="mb-5 mr-2 h-7 w-24 rounded bg-slate-200"></div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="mb-3 h-4 w-1/6 rounded bg-slate-200"></div>
          <div className="mb-5 h-4 w-2/6 rounded bg-slate-200"></div>
          <div className="flex items-center justify-center">
            <div className="h-[300px] w-[300px] rounded-full bg-slate-200"></div>
          </div>
        </div>
        <div className="col-span-12 flex items-center justify-center lg:col-span-6">
          <div className="mt-10 h-[300px] w-full rounded bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
}
