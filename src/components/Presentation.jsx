import { useTranslation,Trans} from "react-i18next";

export const Presentation = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-2 bg-stone-100">
      <div className="relative m-auto mt-0 max-w-4xl my-7 sm:pl-10 p-4">
        <p className="text-xl text-gray-800">
          <span className="w-10 inline-block border-[#9f1239] border-t-[2px] bg-[#9f1239] align-middle"></span>
          <span className="w-3 h-3 inline-block mr-2 rounded-full bg-[#9f1239]"></span>
          {t("presentation.intro")}
          <span className="font-bold">{t("presentation.highlight")}</span>
          <Trans i18nKey="presentation.description" />        </p>
      </div>
    </div>
  );
};

