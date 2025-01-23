import Header from '../../src/component/Header';
import Footer from '../../src/component/Footer';
import Menu from '../../src/component/Menu';
import Banner from '../../src/component/Banner';
import Betterfuture from '../../src/component/Betterfuture';
import Aboutus from '../../src/component/Aboutus';
import Joinourteam from '../../src/component/Joinourteam'; 
import Services from '../../src/component/Services'; 
import Happyclients from '../../src/component/Happyclients';
import Testimonials from '../../src/component/Testimonials';
import Gallery from '../../src/component/Gallery';
import Contactus from '../../src/component/Contactus';
import Copyright from '../../src/component/Copyright';

function Homepage() {
  return (
    <>
      <Header />
      <Menu/>
      <Banner/>
      <Betterfuture/>
      <Aboutus/>
      <Joinourteam/>
      <Services/>
      <Happyclients/>
      <Testimonials/>
      <Gallery/>
      <Contactus/>
      <Footer/>
      <Copyright/>
    </>
    
  );
}

export default Homepage;
