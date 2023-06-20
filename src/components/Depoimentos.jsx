import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import depoimento1 from "../assets/images/depoimento1.png";
import depoimento2 from "../assets/images/depoimento2.png";
import depoimento3 from "../assets/images/depoimento3.png";

const depoimentosData = [
  {
    customerName: "Zaida",
    customerTitle: "Grupo Fametro",
    content:
      "O site ficou incrível! A interface é intuitiva, o design é atraente e responsivo, e todas as funcionalidades foram implementadas com perfeição. Recebemos muitos elogios dos visitantes da feira pela facilidade de navegação e pela apresentação elegante das informações. A Sudo demonstrou profissionalismo e comprometimento em transformar nossas ideias em realidade.",
    image: depoimento1,
  },
  {
    customerName: "Yadira",
    customerTitle: "Estética",
    content:
      "Estou maravilhada com o resultado. O custo-benefício foi excelente, pois além do desenvolvimento do site, também obtivemos o registro do domínio e a hospedagem, tudo por um preço acessível. Isso nos poupou tempo e esforço, já que não precisamos lidar com questões técnicas complicadas. O processo foi eficiente, entregando o site dentro do prazo prometido, em apenas 24 horas! Essa agilidade nos permitiu estabelecer uma presença online rapidamente.",
    image: depoimento2,
  },
  {
    customerName: "David",
    customerTitle: "Studio de Design",
    content:
      "Estamos gratos pela dedicação e competência demonstradas pela Sudo. Se você procura um serviço rápido, seguro e ágil, eu recomendo fortemente os serviços desta agência. Eles superaram nossas expectativas. Obrigado, Sudo, por tornar todo o processo uma experiência suave e eficiente!",
    image: depoimento3,
  },
];

export const Depoimentos = () => (
  <section className="w-full flex justify-center pt-10 mb-16 lg:mb-32 bg-customDarkBg2 relative">
    <div className="absolute -top-16" id="depoimentos" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="custom-block-subtitle text-center mb-6">
          Depoimentos
        </div>
        <div className="custom-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48">
          Alguns casos de sucesso
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {depoimentosData.map((depoimento, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 custom-border-gray-darker rounded-xl bg-customDarkBg3 flex flex-col px-6 py-4"
              key={`${depoimento.customerName}-${index}`}
            >
              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="custom-content-text-white">
                "{depoimento.content}"
              </div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <img src={depoimento.image} alt="" width="45px" />
                <div className="flex flex-col ml-4">
                  <div className="custom-content-text-white font-medium">
                    {depoimento.customerName}
                  </div>
                  <div className="custom-content-text-gray">
                    {depoimento.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
