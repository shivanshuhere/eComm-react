
const Loader = () => {
  return (
    <div className="relative flex w-[80%] animate-pulse gap-2 p-10">
      <div className=" w-20 h-20 border md:w-28 md:h-28 bg-slate-200 rounded-2xl" />
      <div className="flex-1">
        <div className="mb-1 h-5 w-1/2 rounded-lg bg-slate-200 text-lg" />
        <div className="h-5 w-[90%] rounded-lg bg-slate-200 text-sm" />
      </div>
      <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-200" />
    </div>
  );
}

export default Loader;
