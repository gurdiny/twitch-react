export default function ChannelsCategories({ title, viewers, tags, image }) {
  return (
    <div className="flex flex-col hover:overflow-hidden">
      <div className="bg-[#a970ff] hover:overflow-hidden group-hover:shadow-lg">
        <img
          className="hover:ml-2 hover:mb-2 hover:overflow-hidden transition-transform duration-300 transform group-hover:scale-105"
          src={image}
          alt=""
        />
      </div>
      <h2 className="text-white text-sm font-bold hover:text-[#a970ff]">
        {title}
      </h2>
      <p className="text-[12px] text-[#adadb8]">{viewers}</p>
      <ul className="flex flex-row gap-1 mt-1">
        {tags.map((tag) => {
          return (
            <li className="text-[#ADADB8] text-[12px] bg-[#2F2F35] rounded-lg pl-2 pr-2">
              {tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
