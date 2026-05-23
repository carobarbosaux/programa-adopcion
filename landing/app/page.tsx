import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Context from "@/components/Context";
import Timeline from "@/components/Timeline";
import Phases from "@/components/Phases";
import Capabilities from "@/components/Capabilities";
import LearningExp from "@/components/LearningExp";
import AnthropicAcademy from "@/components/AnthropicAcademy";
import Results from "@/components/Results";
import Repository from "@/components/Repository";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Context />
        <Timeline />
        <Phases />
        <Capabilities />
        <LearningExp />
        <AnthropicAcademy />
        <Results />
        <Repository />
        <FinalCTA />
      </main>
    </>
  );
}
