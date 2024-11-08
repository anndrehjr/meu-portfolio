import Navbar from '../components/Navbar';
import Apresentacao from '../components/Apresentacao';
import Curriculo from '../components/Curriculo';
import Projetos from '../components/Projetos';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Apresentacao />
        <Curriculo />
        <Projetos />
      </main>
      <Footer />
    </div>
  );
}
