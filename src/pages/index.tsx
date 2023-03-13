import type { NextPage } from "next";
import Header from "components/Header";
import Hero from "components/Hero";
import Head from "next/head";
import About from "components/About";
import Experience from "components/Experience";
import Skills from "components/Skills";
import Projects from "components/Projects";
import Contact from "components/Contact";
import ScrollToTop from "components/ScrollToTop";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WinLax Portfolio</title>
        <meta name="description" content="Hi!! Welcome to WinLax Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="WinLax Portfolio" />
        <meta property="og:description" content="Hi!! Welcome to WinLax Portfolio" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://winlax-portfolio.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WinLax Portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <ScrollToTop />
      <div className="bg-grayLight dark:bg-grayDark flex flex-col h-full min-h-screen gap-32 text-white transition-all duration-500">
        {/* Hero */}
        <section id="hero" className="snap-center">
          <Hero />
        </section>
        {/* About */}
        <section id="about" className="snap-start">
          <About />
        </section>
        {/* Experience */}
        <section id="experience" className="lg:snap-start">
          <Experience />
        </section>
        {/* Projects */}
        <section id="projects" className="lg:snap-start">
          <Projects />
        </section>
        {/* Skills */}
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        {/* Contact */}
        <section id="contact" className="snap-start">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default Home;
