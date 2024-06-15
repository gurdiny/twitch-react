import clsx from "clsx";
export default function ChannelsLoop({ img, name, category, views }) {
  return (
    <article className="grid grid-cols-5 justify-around gap-1 2xl:gap-3 p-[5px_10px] hover:bg-[#26262C] h-[50px]">
      <div className="col-span-1 flex items-center">
        <img className="rounded-full w-[80%] max-w-full" src={img} alt="" />
      </div>
      <div className="col-span-4 flex flex-row flex-3 items-center justify-between ">
        <div className="flex flex-col gap-0">
          <p className="text-white text-sm font-semibold">{name}</p>
          <p className="text-[12px] text-[#adadb8]">{category}</p>
        </div>
        <div className="flex flex-row">
          <p className="text-[10px]">🔴</p>
          <span className="text-white text-[12px]">{`${views} k`}</span>
        </div>
      </div>
    </article>
  );
}
