import Categories from "./loops/Categories";
import SearchIcon from "./svgs/SearchIcon";
import ChannelsCategories from "./loops/ChannelsCategories";
export default function Content() {
  const categoryList = [
    {
      title: "Juegos",
      url: "/directory/gaming",
      icon: "https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg",
    },
    {
      title: "IRL",
      url: "/directory/irl",
      icon: "https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg",
    },
    {
      title: "Música",
      url: "/directory/music",
      icon: "https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg",
    },
    {
      title: "Creative",
      url: "/directory/creative",
      icon: "https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg",
    },
    {
      title: "Esports",
      url: "/directory/esports",
      icon: "https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg",
    },
  ];

  const channelsList = [
    {
      title: "Just Chatting",
      viewers: "332.6k espectadores",
      tags: ["IRL"],
      image: "https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg",
    },
    {
      title: "Kings League",
      viewers: "16 espectadores",
      tags: [],
      image: "https://static-cdn.jtvnw.net/ttv-boxart/1863222988-285x380.jpg",
    },
    {
      title: "Grand Theft Auto V",
      viewers: "277.5k espectadores",
      tags: ["First-person Shooter"],
      image: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg",
    },
    {
      title: "Rust",
      viewers: "202.5k espectadores",
      tags: ["FPS", "First-person Shooter"],
      image: "https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg",
    },
    {
      title: "League of Legends",
      viewers: "113.5k espectadores",
      tags: ["Role-playing Game", "Strategy"],
      image: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
    },
    {
      title: "Special Events",
      viewers: "6.9k espectadores",
      tags: ["IRL"],
      image: "https://static-cdn.jtvnw.net/ttv-boxart/509663-285x380.jpg",
    },
  ];

  return (
    <div className="m-8">
      <section>
        <div>
          <h1 className="text-white text-[3rem] font-bold">Explorar</h1>
          <div className="flex gap-1 mt-8 justify-between">
            {categoryList.map((category) => {
              return <Categories title={category.title} icon={category.icon} />;
            })}
          </div>
          <div>
            <div className="pt-8">
              <ul className="flex flex-row gap-4">
                <li className="text-[18px] text-[#a970ff] font-semibold">
                  <p>Categorías</p>
                  <div className="w-full h-[2px] bg-[#a970ff] mt-2"></div>
                </li>
                <li className="text-[18px] text-[#fff] font-semibold ">
                  <p className="hover:text-[#a970ff] cursor-pointer">
                    Canales en Vivo
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex flex-row justify-between h-[6vh] mt-4">
              <div className="flex flex-row items-center p-1 bg-[#18181B] border-2 border-[#67676B] border-solid rounded-md w-auto">
                <span>
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  className="bg-transparent outline-none text-[#ADADB8]"
                />
              </div>
              <div className="flex flex-row justify-between items-center">
                <span className="text-white w-[50%] font-normal">
                  Ordenar por
                </span>
                <select
                  className="p-1 bg-[#18181B] border-2 border-[#67676B] border-solid rounded-md w-[100%] text-white"
                  name=""
                  id=""
                >
                  <option value="1">Recomendaciones para ti</option>
                  <option value="2">Más espectadores</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {channelsList.map((channels) => {
              return (
                <ChannelsCategories
                  key={`channel-category-${channels.title}`}
                  title={channels.title}
                  viewers={channels.viewers}
                  tags={channels.tags}
                  image={channels.image}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
