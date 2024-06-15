import clsx from "clsx";
export default function ChannelsCategories({ title, viewers, tags, image }) {
  return (
    <div className="flex flex-col hover:overflow-hidden">
      <div className="lg:bg-[#a970ff] hover:overflow-hidden group-hover:shadow-lg relative">
        {tags.includes("IRL") && (
          <div className="absolute text-black text-[10px] z-20 top-4 right-4 bg-[#FF75E6] rounded-xl pl-2 pr-2 font-semibold">
            <span>NUEVO</span>
          </div>
        )}
        <img
          className="hover:ml-2 hover:mb-2 hover:overflow-hidden transition-transform duration-300 transform group-hover:scale-105"
          src={image}
          alt=""
        />
      </div>
      <h2
        className={clsx("text-white text-sm font-bold hover:text-[#a970ff]", {
          "bg-[#a970ff]": tags.includes("First-person"),
        })}
      >
        {title}
      </h2>
      <p className="text-[12px] text-[#adadb8]">{viewers}</p>
      <ul className="flex flex-row gap-1 mt-1">
        {tags.map((tag) => {
          return (
            <li className="text-[#ADADB8] sm:text-[12px] text-[10px] bg-[#2F2F35] rounded-lg pl-2 pr-2">
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
