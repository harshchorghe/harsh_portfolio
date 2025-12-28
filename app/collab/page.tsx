import CollabForm from "@/app/collab/CollabForm";
import Navbar from "@/components/common/NavBar";

export default function CollabPage() {
  return (
    <main className="min-h-screen flex items-center justify-center py-24 px-4">
      <div className="w-full max-w-4xl">
        <Navbar />
        <CollabForm />
      </div>
    </main>
  );
}
