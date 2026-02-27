import { ExpandableTabs } from "../ui/ExpandableTabs";
import { User, Code2, Briefcase, Mail } from "lucide-react"; 

export default function Navbar() {
  const tabs = [
    { title: "Hakkımda", icon: User, id: "hakkimda" },
    { title: "Projeler", icon: Code2, id: "projeler" },
    { type: "separator" },
    { title: "Deneyim", icon: Briefcase, id: "deneyim" },
    { title: "İletişim", icon: Mail, id: "iletisim" },
  ];

  return (
    <nav className="fixed top-6 w-full px-4 flex justify-center z-50 pointer-events-none">
      <div className="pointer-events-auto">
        <ExpandableTabs tabs={tabs} />
      </div>
    </nav>
  );
}