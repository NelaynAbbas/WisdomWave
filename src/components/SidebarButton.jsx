const SidebarButton = ({ button }) => {
  return (
    <div className="sidebar-button">
      <a
        href="#"
        class="group relative rounded-xl gap-y-4 pt-10 p-2 text-blue-600 hover:bg-gray-50"
      >
        <button class="mt-2 rounded-full bg-gray-100">
          <img class="h-12 w-12 rounded-full" src={button.img} alt="" />
        </button>
        <div class="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
          <div class="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
            <div class="absolute inset-0 -left-1 flex items-center">
              <div class="h-2 w-2 rotate-45 bg-white"></div>
            </div>
            {button.name} <span class="text-gray-400">(Y)</span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SidebarButton;
