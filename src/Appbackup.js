import "./styles.css";
import Greeting from "./Greeting.js";

export default function App() {
  const video = {
    img: "images/1.png",
    title: "My superduper cool react video title",
    channel: "Channel Name",
    views: "1.4M",
    time: "3:14",
    posted: "2 hours ago",
    channelImage: "images/2.png",
  };

  const bla = ["apple", "banana", "orange"];

  return (
    <div className="App">
      <Greeting name="Jason" video={video} fruits={bla} />
      <Greeting name="Marie" video={video} fruits={bla} />
    </div>
  );
}
