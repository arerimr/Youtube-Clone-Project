import Search from "./Search";
import ErrorMessage from "./errors/ErrorMessage";


function Home() {

  return (
    <div className="home">
      <Search />
      <ErrorMessage />
    </div>
  );
}

export default Home;
