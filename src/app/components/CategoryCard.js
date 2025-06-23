const CategoryCard = ({ title, icon, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center gap-2 hover:opacity-70 transition-all duration-300 cursor-pointer drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
    onClick={onClick}
    >
      {icon}
      <span className="text-lg font-semibold">{title}</span>
    </div>
  );
};

export default CategoryCard;
