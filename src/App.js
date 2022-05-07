import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";
import FundoMobile from "./components/FundoMobile";

export default function App() {
    return (
    <div>
        <TopBar />
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Post />
            </div>
            <Sidebar />
            <FundoMobile />
        </div>
    </div>
    );
}