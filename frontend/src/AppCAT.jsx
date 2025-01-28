import { Work } from "./components/Work";
import Main from "./components/Main";
import Sidenav from "./components/Sidenav";
import { Projects } from "./components/Projects";
import { Presentation } from "./components/Presentation";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { UnderContact } from "./components/UnderContact";
import { Studies } from "./components/Studies";

export const AppCAT = () => {
  return (
    <>
      <Sidenav />
      <Main />
      <Presentation />
      <Projects />
      <Work />
      <Studies />
      <Skills />
      <Contact />
      <UnderContact />
    </>
  );
};
