import { faqs } from '../content/website.ts';
import { Disclosure } from './Disclosure.tsx';
import { Icon } from './Icon.tsx';

export function FAQ() {
  return (
    <section className="section">
      <div className="wrap faq-wrap">
        <h2>Questions from mission control.</h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <Disclosure
              key={item.question}
              initialOpen={index === 0}
              summary={
                <>
                  <span>{item.question}</span>
                  <Icon name="chevron" />
                </>
              }
            >
              <p>{item.answer}</p>
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}
