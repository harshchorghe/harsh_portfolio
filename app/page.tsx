import YouTubeSection from "@/screens/YouTubeSection";
import { AboutScreen, ContactScreen, HomeScreen, ProjectsScreen,} from "@/screens";
import Navbar from "@/components/common/NavBar";
import ResponseForm from "@/components/home/ResponseForm";


export default function Page() {
  return (
    <>
    <Navbar />

      <HomeScreen />
      <YouTubeSection />
      <AboutScreen />
      <ContactScreen />
      <ProjectsScreen />
      <ResponseForm />
      
    </>
  );
}
