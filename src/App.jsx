import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Content from "./components/Content";
export default function App() {
  return (
    <main className="w-full lg:min-h-screen p-0 lg:grid lg:grid-cols-[20%_1fr] 2xl:grid-cols-[12%_1fr] lg:grid-rows-[3.2rem_1fr]">
      <NavBar className="fill-white" />
      <Menu />
      <Content />
    </main>
  );
}
