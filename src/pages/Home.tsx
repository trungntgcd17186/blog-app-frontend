import Footer from "../common/Footer";
import Header from "../common/Header";
import RecentPosts from "../components/RecentPosts";
import TopPosts from "../components/TopPosts";

const Home = () => {
  return (
    <div>
      <Header />
      <TopPosts />
      <RecentPosts />
      <Footer />
    </div>
  );
};

export default Home;
