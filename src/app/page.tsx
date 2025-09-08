import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./sections/Hero";
 import About from "./sections/About"
 import Services from "./sections/Services"
// import Packages from "./sections/Packages"
 import Approach from "./sections/Approach"
 import Team from "./sections/Team"
 import Work from "./sections/Work"
import Video from "./sections/Video";
// import ContactCTA from "./sections/ContactCTA"


export default function Page() {
  return (
    <main className="bg-pattern bg-repeat">
      {/* Header */}
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="video">
        <Video/>
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="approach">
        <Approach />
      </section>

       {/* <section id="packages">
        <Packages />
      </section> */}

         <section id="about">
        <About />
      </section>

      

       <section id="team">
        <Team />
      </section>

      

      {/* <section id="contact">
        <ContactCTA />
      </section>      */}

      <Footer />
    </main>
  );
}
