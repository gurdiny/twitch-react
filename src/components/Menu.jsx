import ChannelsLoop from "./loops/ChannelsLoop";
export default function Menu() {
  const channelsInfo = [
    {
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/ab76403b-c87c-4439-b46b-b6cd0c07a663-profile_image-70x70.png",
      name: "MYM_ALKAPONE",
      category: "Rust",
      views: 2600,
    },
    {
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/0e6f8782-d5b9-4a51-ae8a-9c952c213487-profile_image-70x70.png",
      name: "rivers_gg",
      category: "Rust",
      views: 20500,
    },
    {
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/9eb48e6a-eae8-49f7-933a-b9a047234054-profile_image-70x70.png",
      name: "elded",
      category: "Minecraft",
      views: 6800,
    },
    {
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/f1f5921c-bf2e-4232-9610-b4e2fdd8a64d-profile_image-70x70.png",
      name: "CrystalMolly",
      category: "Rust",
      views: 10900,
    },
    {
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/elfedelobo-profile_image-1d74acb6f0797ea1-70x70.png",
      name: "ElFedelobo",
      category: "Clone Hero",
      views: 1600,
    },
    {
      img: "https://static-cdn.jtvnw.net/jtv_user_pictures/d4885242-febf-4a11-a42a-a0ad52474ee2-profile_image-70x70.png",
      name: "ElSpreen",
      category: "Rust",
      views: 21600,
    },
  ];
  return (
    <aside className=" bg-[#1F1F23] ">
      <div className="flex flex-col gap-1">
        <div className="m-[0_1rem] h-[50px] flex items-center w-auto ">
          <h2 className=" text-white text-sm font-semibold ">
            CANALES RECOMENDADOS
          </h2>
        </div>
        <div>
          {channelsInfo.map((chanel) => {
            return (
              <ChannelsLoop
                img={chanel.img}
                name={chanel.name}
                category={chanel.category}
                views={chanel.views}
                key={`channel-${chanel.name}`}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
}
