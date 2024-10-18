import { SidebarButton } from "../components";
const Sidebarbuttons = ({ buttons }) => {
  return (
    <nav class="flex flex-1 flex-col gap-y-4 pt-10">
      {buttons.map((button, id) => (
        <SidebarButton key={id} button={button} />
      ))}
    </nav>
  );
};

export default Sidebarbuttons;
