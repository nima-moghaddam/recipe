import GridWrapper from "@/components/GridWrapper";
import { numArrayCreator } from "@/utils/functions/numArrayCreator";

export default function Loading() {
  return (
    <>
      <div className="mb-5 w-full rounded border shadow-sm md:w-1/2">
        <div className="flex animate-pulse flex-col space-x-4">
          <div className="h-8 w-full bg-slate-200"></div>
        </div>
      </div>

      <GridWrapper>
        {numArrayCreator(12).map((num) => (
          <div className="rounded border shadow-sm" key={num}>
            <div className="flex animate-pulse flex-col space-x-4">
              <div className="mb-2 h-24 w-full bg-slate-200"></div>
              <div className="flex-1 space-y-6 py-1 pr-3">
                <div className="h-2 rounded bg-slate-200"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 h-2 rounded bg-slate-200"></div>
                    <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  </div>
                  <div className="h-2 rounded bg-slate-200"></div>
                  <div className="h-2 rounded bg-slate-200"></div>
                  <div className="h-2 rounded bg-slate-200"></div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                    <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                    <div className="col-span-1 h-2 rounded bg-slate-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </GridWrapper>
    </>
  );
}
