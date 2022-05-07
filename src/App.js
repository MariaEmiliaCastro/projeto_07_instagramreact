import TopBar from "./components/TopBar";
import Stories from "./components/Stories";
import Post from "./components/Post";

export default function App() {
    return (
    <div>
        <TopBar />
        <div className="corpo">
            <div className="esquerda">
                <Stories />
                <Post />
            </div>
        </div>
    </div>
    );
}