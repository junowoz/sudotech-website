import { useState } from "react";
import { motion } from "framer-motion";

import { ContratarModal } from "./ContratarModal";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = [
  "Seamless integration",
  "Real-time data visualization",
  "Advanced predictive analytics",
  "Collaborative environment",
  "Responsive customer support",
];

const planData = [
  {
    name: "Plano Impulso Digital",
    price: "R$1299",
    description:
      "Ideal para empresas que precisam de uma presença online profissional.",
    features: [
      "Desenvolvimento de Site Institucional (1 pagina com diversas seções)",
      "Domínio (.com.br) + Hospedagem incluídos",
      "Design responsivo",
      "Integração de redes sociais no site",
      "Entrega em até: 24hrs",
    ],
  },
  {
    name: "Plano Premium Digital",
    price: "$1499",
    description:
      "Perfeito para empresas em crescimento que precisam de um site mais robusto.",
    features: [
      "Todas as características do Plano Impulso Digital",
      "Desenvolvimento de Site Institucional (até 5 páginas)",
      "Domínio personalizado",
      "Chat online",
      "Entrega expressa em até: 24hrs",
    ],
  },
  {
    name: "Plano Elite Digital",
    price: "$1999",
    description:
      "Para empresas que desejam uma solução web completa e personalizada.",
    features: [
      "Todas as características do Plano Premium Digital",
      "Desenvolvimento de Site Institucional (até 8 páginas)",
      "Integração de form de contato",
      "Funcionalidades e integrações personalizadas",
      "Entrega em até: 72hrs",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="w-screen flex justify-center bg-customDarkBg2 relative">
      <div className="absolute -top-16" id="pricing" />
      <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="custom-block-subtitle">
                O que se ajusta melhor à sua empresa?
              </span>
              <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                Escolha o seu melhor plano
              </h2>
              <p className="mb-6 text-customGrayText">
                Escolha o melhor plano expresso para suas necessidades e obtenha
                seu site em um piscar de olhos.
              </p>
            </div>
            <div className="flex flex-wrap flex-col lg:flex-row p-mx-4 items-center mt-20">
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    {planData[0].name}
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {planData[0].price}
                    </div>
                  </div>

                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    {planData[0].description}
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    {planData[0].features.map((feature, index) => (
                      <li className="mb-4 flex" key={`${feature}-${index}`}>
                        <CheckArrowIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://api.whatsapp.com/send?phone=559293220992&text=Ol%C3%A1!%20Quero%20criar%20o%20meu%20site%20e%20aderir%20ao%20Plano%20Impulso%20Digital%20%F0%9F%9A%80"
                    target="_blank"
                  >
                    <div className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-6">
                      Criar meu site
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                    {planData[1].name}
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {planData[1].price}
                    </div>
                  </div>
                  <p className="mt-8 mb-8 2xl:mb-12 text-gray-500 leading-loose text-left">
                    {planData[1].description}
                  </p>
                  <ul className="mb-14 text-white">
                    {planData[1].features.map((feature, index) => (
                      <li className="mb-4 flex" key={`${feature}-${index}`}>
                        <CheckArrowIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://api.whatsapp.com/send?phone=559293220992&text=Ol%C3%A1!%20Quero%20criar%20o%20meu%20site%20e%20aderir%20ao%20Plano%20Premium%20Digital%20%F0%9F%9A%80"
                    target="_blank"
                  >
                    <div className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200 mt-6">
                      Criar meu site
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                <div className="p-8 bg-customDarkBg3 rounded-3xl">
                  <h4 className="mb-2 text-xl font-bold font-heading text-white text-left">
                    {planData[2].name}
                  </h4>
                  <div className="flex justify-start items-end">
                    <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                      {planData[2].price}
                    </div>
                    <div className="text-gray-500">
                      {planData[2].priceDescription}
                    </div>
                  </div>
                  <p className="mt-4 mb-6 2xl:mb-10 text-gray-500 leading-loose text-left">
                    {planData[2].description}
                  </p>
                  <ul className="mb-2 2xl:mb-6 text-white">
                    {planData[2].features.map((feature, index) => (
                      <li className="mb-4 flex" key={`${feature}-${index}`}>
                        <CheckArrowIcon />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://api.whatsapp.com/send?phone=559293220992&text=Ol%C3%A1!%20Quero%20criar%20o%20meu%20site%20e%20aderir%20ao%20Plano%20Elite%20Digital%20%F0%9F%9A%80"
                    target="_blank"
                  >
                    <div className="inline-block text-center py-2 px-4 w-full rounded-xl rounded-t-xl custom-button-colored font-bold leading-loose mt-6">
                      Criar meu site
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
