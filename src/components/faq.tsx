"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quando preciso pagar pelos serviços?",
    answer:
      "O pagamento será solicitado após a conclusão e aprovação do projeto. Isso é para garantir a total segurança e satisfação do cliente. Todos os preços citados já têm impostos e custos inclusos.",
  },
  {
    question: "Como funciona o processo de desenvolvimento?",
    answer:
      "Iniciamos com uma reunião para entender suas necessidades, depois desenvolvemos um protótipo para sua aprovação. Após ajustes, iniciamos o desenvolvimento com entregas incrementais para seu feedback.",
  },
  {
    question: "Quanto tempo leva para desenvolver um projeto?",
    answer:
      "O prazo varia de acordo com a complexidade do projeto. Durante nossa reunião inicial, forneceremos uma estimativa detalhada baseada nos seus requisitos específicos.",
  },
  {
    question: "Vocês dão suporte após a entrega do projeto?",
    answer:
      "Sim, oferecemos suporte técnico após a entrega do projeto. Também disponibilizamos pacotes de manutenção mensal para garantir que seu sistema permaneça atualizado e funcionando perfeitamente.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32">
      <div className="container">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
