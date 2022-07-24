import OverViewContent from "../../component/organism/OverviewContent";
import SideBar from "../../component/organism/Sidebar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
        <SideBar/>
        <OverViewContent/>
    </section>
  )
}
