export default function Loading() {
  return (
    <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
        <div className="border shadow-sm rounded">
          <div className="animate-pulse flex flex-col space-x-4">
            <div className="bg-slate-200 h-14 w-full mb-2"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
