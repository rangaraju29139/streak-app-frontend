import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

export default function Dashboard() {
  return (
    <>
      <Navigation></Navigation>
      <div className="m-m">
        <a href="/oauth2/authorization/google">Log in with Google</a>
      </div>

      <Footer></Footer>
    </>
  );
}
