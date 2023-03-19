import Search from "./Search";
import ErrorMessage from "./errors/ErrorMessage";


export default function Home() {
  

  return (
    <div className="home">
      <Search />
      <ErrorMessage />
    </div>
  );
}
