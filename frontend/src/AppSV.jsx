import { Work } from "./components/Work";
import Main from "./components/Main";
import Sidenav from "./components/Sidenav";
import { Projects } from "./components/Projects";
import { Presentation } from "./components/Presentation";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { UnderContact } from "./components/UnderContact";
import { Studies } from "./components/Studies";
import svTranslations from "../public/sv.json"

export const AppSV = () => {
  return (
    <>
      <Sidenav translations={svTranslations.sidenav}/>
      <Main translations={svTranslations.main}/>
      <Presentation translations={svTranslations.presentation}/>
      <Projects translations={svTranslations.projects}/>
      <Work translations={svTranslations.work}/>
      <Studies />
      <Skills translations={svTranslations.skills}/>
      <Contact translations={svTranslations.contact}/>
      <UnderContact />
    </>
  );
};
