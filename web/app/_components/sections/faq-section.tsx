import { Reveal } from "../ui/reveal";
import { FAQS } from "./faq-section.data";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-border bg-background-elevated/35 py-20 lg:py-28"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-12 px-5 sm:px-8 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Common Questions
          </span>
          <h2
            id="faq-heading"
            className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl lg:text-[44px]"
          >
            Straight answers for church media teams.
          </h2>
        </Reveal>

        <Reveal>
          <dl
            className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="flex flex-col gap-2.5 border-t border-border pt-6"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <dt
                  itemProp="name"
                  className="font-display text-lg font-semibold leading-snug text-foreground sm:text-xl"
                >
                  {faq.question}
                </dt>
                <dd
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]"
                >
                  <span itemProp="text">{faq.answer}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
