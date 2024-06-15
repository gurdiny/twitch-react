export default function Categories({ title, icon }) {
  return (
    <div className="flex justify-between bg-[#5C16C5] hover:bg-[#583394] h-[45px] rounded-[5px] items-center">
      <div className="pl-4 pr-4 text-[24px] font-semibold text-white">
        {title}
      </div>
      <div>
        <img src={icon} alt="" />
      </div>
    </div>
  );
}
