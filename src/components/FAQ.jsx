import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "Quando preciso pagar pelos serviços?",
    answer:
      "O pagamento será solicitado após a conclusão e aprovação do projeto. Isso é para garantir a total segurança e satisfação do cliente. Todos os preços citados já têm impostos e custos inclusos.",
  },
  {
    question: "Quanto tempo leva para completar um projeto?",
    answer:
      "O tempo de conclusão do projeto varia de acordo com o plano escolhido. Para o Plano Presença Digital e o Plano Crescimento Digital, a entrega é em até 24 horas, e para o Plano Excelência Digital, a entrega é em até 72 horas.",
  },
  {
    question: "Quantas revisões estão incluídas no preço?",
    answer:
      "Oferecemos 2 sessões de revisão e feedback sem custo adicional. Após estas sessões iniciais, haverá uma taxa de R$ 50 por cada 30 min adicionais de revisão.",
  },
  {
    question: "O preço inclui o domínio e a hospedagem?",
    answer:
      "O preço do domínio e da hospedagem varia e será determinado durante o levantamento de requisitos. Estes são custos extras e não estão incluídos no preço do plano. No entanto, o plano de Domínio (.com.br) + hospedagem é por conta da empresa no primeiro ano.",
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-7 custom-block-subtitle text-center">Dúvidas?</p>
          <h2 className="mb-16 custom-block-big-title text-center">
            Perguntas Frequentes
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
          {title}
        </h3>
        <p
          className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#FF874D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
};
