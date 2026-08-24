"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type Language = "uk" | "ru" | "en";

const copy = {
  uk: {
    nav: ["Зустріч", "Питання", "Формат", "Принципи"],
    join: "Долучитися",
    soon: "Незабаром · Vision Cinema",
    type: "Синемалогія",
    title: "Одіссея",
    subtitle: "Фільм, який розколов кіносвіт навпіл.",
    intro: "Одні бачать шедевр, інші — тотальне нерозуміння. Навіть найслабші моменти не стирають ідею, заради якої все затівалося.",
    meta: ["Дата й час — незабаром", "вул. Красна, 3", "Vision Cinema"],
    cta: "Хочу на зустріч",
    scroll: "Дізнатися більше",
    quote: "Повернутися додому — означає зустріти того, ким ти став у дорозі.",
    contextEyebrow: "Міф, екран, ми",
    contextTitle: "Давній сюжет.\nСучасна тривога.",
    contextText: "Нолан переніс на екран історію царя Ітаки Одіссея та його повернення після Троянської війни. Але зробив це так, що суперечка про сенс стала частиною самого фільму.",
    contextNote: "Ми не шукатимемо єдину правильну відповідь. Нас цікавить, чому саме цей образ зачіпає нас зараз.",
    questionsEyebrow: "Про що говоритимемо",
    questionsTitle: "П’ять входів\nу фільм",
    questions: [
      ["Міф сьогодні", "Чому Нолан обрав саме цю історію — і що в Одіссеєвому шляху звучить сучасно?"],
      ["Неможливе повернення", "Одіссей як метафора: чи можна повернутися додому, якщо дорога вже змінила тебе?"],
      ["Розділений погляд", "Чому критики й глядачі опинилися у двох таборах — і що ця полярність говорить про нас?"],
      ["Мова видовища", "Як масштаб, час, звук і образ створюють досвід, який неможливо звести до сюжету?"],
      ["Наші одіссеї", "Які шляхи привели нас не туди, куди ми планували — і що ми знайшли натомість?"],
    ],
    lensesEyebrow: "Оптики розмови",
    lensesTitle: "Дивитися\nщедріше",
    lensesIntro: "Складний фільм не потребує вироку. Він потребує кількох способів бачити — одночасно.",
    lenses: [
      ["Філософія", "Дім та ідентичність, свобода і доля, час повернення, межа людського."],
      ["Семіотика", "Корабель, море, чудовисько, поріг: як давні знаки змінюють значення на екрані."],
      ["Психологія", "Туга, провина, витривалість, спокуса й образ дому, який ми носимо всередині."],
    ],
    formatEyebrow: "Як це відбувається",
    formatTitle: "Не лекція.\nНе рецензія.",
    formatText: "Це простір, де кожен може принести свій погляд, посперечатися без бажання перемогти й знайти несподівані сенси разом з іншими.",
    steps: [["01", "Дивимося", "Уважно до образу й до власної реакції."], ["02", "Витримуємо паузу", "Не поспішаємо перетворювати досвід на висновок."], ["03", "Говоримо", "Від першої особи — без діагнозів і остаточних істин."], ["04", "Слухаємо", "Чужий погляд не заперечує наш, а розширює його."]],
    hostsEyebrow: "Ведучі кола",
    hostsTitle: "Ті, хто\nтримає коло",
    hosts: [["Снежана", "ведуча кола"], ["Антон", "ведучий кола"]],
    valuesEyebrow: "Етика діалогу",
    valuesTitle: "Кожен голос\nзмінює картину.",
    values: [["Цікавість замість оцінки", "Перш ніж заперечити, ставимо ще одне питання."], ["Турбота замість змагання", "Не доводимо, хто зрозумів фільм краще."], ["Щедрість інтерпретації", "Залишаємо місце для складності, тиші й таємниці."]],
    finalEyebrow: "Наступна зустріч",
    finalTitle: "«Одіссея» не дає спокою — навіть тим, хто її не полюбив.",
    finalText: "Приходь. Подивимося, посперечаємося і спробуємо зрозуміти, куди насправді веде дорога додому.",
    addressLabel: "Місце",
    dateLabel: "Коли",
    contactEyebrow: "Організаційні питання",
    contactName: "Вероніка Кудлай",
    contactRole: "адміністраторка клубу",
    contactText: "Запис, дати, місця за столом і всі організаційні питання — до неї.",
    footer: "Кіно як простір спільного мислення",
    rights: "Дивитися — означає співтворити",
  },
  ru: {
    nav: ["Встреча", "Вопросы", "Формат", "Принципы"],
    join: "Присоединиться",
    soon: "Скоро · Vision Cinema",
    type: "Синемалогия",
    title: "Одиссея",
    subtitle: "Фильм, который расколол киномир надвое.",
    intro: "Одни видят шедевр, другие — полное непонимание. Даже самые слабые моменты не отменяют идею, ради которой всё было задумано.",
    meta: ["Дата и время — скоро", "ул. Красная, 3", "Vision Cinema"],
    cta: "Хочу на встречу",
    scroll: "Узнать больше",
    quote: "Вернуться домой — значит встретить того, кем ты стал в пути.",
    contextEyebrow: "Миф, экран, мы",
    contextTitle: "Древний сюжет.\nСовременная тревога.",
    contextText: "Нолан перенёс на экран историю царя Итаки Одиссея и его возвращения после Троянской войны. Но сделал это так, что спор о смысле стал частью самого фильма.",
    contextNote: "Мы не будем искать единственно правильный ответ. Нам интересно, почему именно этот образ затрагивает нас сейчас.",
    questionsEyebrow: "О чём будем говорить",
    questionsTitle: "Пять входов\nв фильм",
    questions: [
      ["Миф сегодня", "Почему Нолан выбрал именно эту историю — и что в пути Одиссея звучит современно?"],
      ["Невозможное возвращение", "Одиссей как метафора: можно ли вернуться домой, если дорога уже изменила тебя?"],
      ["Разделённый взгляд", "Почему критики и зрители оказались в двух лагерях — и что эта полярность говорит о нас?"],
      ["Язык зрелища", "Как масштаб, время, звук и образ создают опыт, который невозможно свести к сюжету?"],
      ["Наши одиссеи", "Какие пути привели нас не туда, куда мы собирались, — и что мы нашли вместо этого?"],
    ],
    lensesEyebrow: "Оптики разговора",
    lensesTitle: "Смотреть\nщедрее",
    lensesIntro: "Сложному фильму не нужен приговор. Ему нужны несколько способов видеть — одновременно.",
    lenses: [
      ["Философия", "Дом и идентичность, свобода и судьба, время возвращения, граница человеческого."],
      ["Семиотика", "Корабль, море, чудовище, порог: как древние знаки меняют значение на экране."],
      ["Психология", "Тоска, вина, стойкость, искушение и образ дома, который мы носим внутри."],
    ],
    formatEyebrow: "Как это происходит",
    formatTitle: "Не лекция.\nНе рецензия.",
    formatText: "Это пространство, где каждый может предложить свой взгляд, поспорить без желания победить и вместе с другими найти неожиданные смыслы.",
    steps: [["01", "Смотрим", "Внимательно к образу и собственной реакции."], ["02", "Выдерживаем паузу", "Не спешим превращать опыт в вывод."], ["03", "Говорим", "От первого лица — без диагнозов и окончательных истин."], ["04", "Слушаем", "Чужой взгляд не отменяет наш, а расширяет его."]],
    hostsEyebrow: "Ведущие круга",
    hostsTitle: "Те, кто\nдержит круг",
    hosts: [["Снежана", "ведущая круга"], ["Антон", "ведущий круга"]],
    valuesEyebrow: "Этика диалога",
    valuesTitle: "Каждый голос\nменяет картину.",
    values: [["Любопытство вместо оценки", "Прежде чем возразить, задаём ещё один вопрос."], ["Забота вместо соревнования", "Не доказываем, кто понял фильм лучше."], ["Щедрость интерпретации", "Оставляем место для сложности, тишины и тайны."]],
    finalEyebrow: "Следующая встреча",
    finalTitle: "«Одиссея» не отпускает — даже тех, кому она не понравилась.",
    finalText: "Приходи. Посмотрим, поспорим и попробуем понять, куда на самом деле ведёт дорога домой.",
    addressLabel: "Место",
    dateLabel: "Когда",
    contactEyebrow: "Организационные вопросы",
    contactName: "Вероника Кудлай",
    contactRole: "администратор клуба",
    contactText: "Запись, даты, места за столом и все организационные вопросы — к ней.",
    footer: "Кино как пространство совместного мышления",
    rights: "Смотреть — значит участвовать в создании",
  },
  en: {
    nav: ["Gathering", "Questions", "Format", "Principles"],
    join: "Join us",
    soon: "Coming soon · Vision Cinema",
    type: "Cinemalogy",
    title: "The Odyssey",
    subtitle: "The film that split the cinema world in two.",
    intro: "Some see a masterpiece; others see total incomprehension. Even its weakest moments cannot erase the idea that set the whole journey in motion.",
    meta: ["Date & time — coming soon", "3 Krasna Street", "Vision Cinema"],
    cta: "Save me a place",
    scroll: "Discover more",
    quote: "To return home is to meet the person the journey has made of you.",
    contextEyebrow: "Myth, screen, us",
    contextTitle: "An ancient story.\nA present anxiety.",
    contextText: "Nolan brings the story of Odysseus, king of Ithaca, and his return from the Trojan War to the screen — in a way that makes the argument about meaning part of the film itself.",
    contextNote: "We will not search for one correct answer. We are interested in why this image reaches us now.",
    questionsEyebrow: "What we will discuss",
    questionsTitle: "Five ways\ninto the film",
    questions: [
      ["Myth today", "Why did Nolan choose this story — and what makes Odysseus’ journey feel contemporary?"],
      ["The impossible return", "Odysseus as metaphor: can we return home after the road has changed us?"],
      ["A divided gaze", "Why did critics and viewers split into two camps — and what does that polarity reveal about us?"],
      ["The language of spectacle", "How do scale, time, sound and image create an experience that cannot be reduced to plot?"],
      ["Our own odysseys", "Which paths took us somewhere we never planned to go — and what did we find instead?"],
    ],
    lensesEyebrow: "Ways of seeing",
    lensesTitle: "Look more\ngenerously",
    lensesIntro: "A difficult film does not need a verdict. It needs several ways of seeing — held together.",
    lenses: [
      ["Philosophy", "Home and identity, freedom and fate, the time of return, the limits of the human."],
      ["Semiotics", "Ship, sea, monster, threshold: how ancient signs acquire new meanings on screen."],
      ["Psychology", "Longing, guilt, resilience, temptation and the image of home we carry within."],
    ],
    formatEyebrow: "How it works",
    formatTitle: "Not a lecture.\nNot a review.",
    formatText: "A space where everyone can bring a point of view, disagree without needing to win, and make unexpected meaning with others.",
    steps: [["01", "We watch", "Attentive to the image and our own response."], ["02", "We pause", "We do not rush to turn experience into a conclusion."], ["03", "We speak", "In the first person — without diagnoses or final truths."], ["04", "We listen", "Another view does not cancel ours; it expands it."]],
    hostsEyebrow: "Circle facilitators",
    hostsTitle: "Those who\nhold the circle",
    hosts: [["Snezhana", "circle facilitator"], ["Anton", "circle facilitator"]],
    valuesEyebrow: "The ethics of dialogue",
    valuesTitle: "Every voice\nchanges the picture.",
    values: [["Curiosity over judgement", "Before disagreeing, we ask one more question."], ["Care over competition", "No one needs to prove they understood the film best."], ["Generous interpretation", "We leave room for complexity, silence and mystery."]],
    finalEyebrow: "Our next gathering",
    finalTitle: "The Odyssey lingers — even for those who did not love it.",
    finalText: "Come along. We will watch, disagree, and ask where the road home is really taking us.",
    addressLabel: "Place",
    dateLabel: "When",
    contactEyebrow: "Planning and booking",
    contactName: "Veronika Kudlai",
    contactRole: "club administrator",
    contactText: "Contact her about registration, dates, seats at the table, and any practical questions.",
    footer: "Cinema as a space for thinking together",
    rights: "To watch is to co-create",
  },
};

export default function CinemaVision({ initialLang = "uk" }: { initialLang?: Language }) {
  const lang = initialLang;
  const t = copy[lang];
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  const lines = (value: string) => value.split("\n").map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>);

  return <main id="top">
    <header className="siteHeader shell">
      <Link className="brand" href={lang === "uk" ? "/" : `/${lang}`}><b>cinema</b><span>.vision</span></Link>
      <nav aria-label={{ uk: "Головна навігація", ru: "Главная навигация", en: "Main navigation" }[lang]}>
        <a href="#gathering">{t.nav[0]}</a><a href="#questions">{t.nav[1]}</a><a href="#format">{t.nav[2]}</a><a href="#principles">{t.nav[3]}</a>
      </nav>
      <div className="headerTools"><div className="languages" aria-label={{ uk: "Мова", ru: "Язык", en: "Language" }[lang]}><Link className={lang === "uk" ? "active" : ""} aria-current={lang === "uk" ? "page" : undefined} href="/">UA</Link><span>/</span><Link className={lang === "ru" ? "active" : ""} aria-current={lang === "ru" ? "page" : undefined} href="/ru">RU</Link><span>/</span><Link className={lang === "en" ? "active" : ""} aria-current={lang === "en" ? "page" : undefined} href="/en">EN</Link></div><a className="smallCta" href="#visit">{t.join}<span>↗</span></a></div>
    </header>

    <section className="odysseyHero shell" id="gathering">
      <div className="heroKicker"><i />{t.soon}</div>
      <div className="heroGrid">
        <div className="heroTitle"><span>{t.type}</span><h1>{t.title}</h1></div>
        <div className="sunMark" aria-hidden="true"><div className="orbit"/><div className="sun"/><span>οἶκος</span></div>
      </div>
      <div className="heroFoot">
        <div className="heroCopy"><h2>{t.subtitle}</h2><p>{t.intro}</p></div>
        <div className="heroMeta">{t.meta.map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}<a href="https://t.me/kudlai_veronika" target="_blank" rel="noreferrer">{t.cta}<span>↗</span></a></div>
      </div>
      <a className="scrollCue" href="#myth"><span>↓</span>{t.scroll}</a>
    </section>

    <section className="quoteBand"><p>“{t.quote}”</p></section>

    <section className="context shell" id="myth">
      <div className="sectionLabel">01 — {t.contextEyebrow}</div>
      <div className="contextBody"><h2>{lines(t.contextTitle)}</h2><div><p>{t.contextText}</p><aside>{t.contextNote}</aside></div></div>
    </section>

    <section className="questions" id="questions"><div className="shell">
      <div className="sectionLabel">02 — {t.questionsEyebrow}</div>
      <div className="questionsHead"><h2>{lines(t.questionsTitle)}</h2><span aria-hidden="true">✦</span></div>
      <ol>{t.questions.map((item, index) => <li key={item[0]}><span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></li>)}</ol>
    </div></section>

    <section className="lenses shell">
      <div className="sectionLabel">03 — {t.lensesEyebrow}</div>
      <div className="splitHead"><h2>{lines(t.lensesTitle)}</h2><p>{t.lensesIntro}</p></div>
      <div className="lensCards">{t.lenses.map((lens, index) => <article key={lens[0]}><span>0{index + 1}</span><div className={`symbol symbol${index + 1}`} aria-hidden="true"/><h3>{lens[0]}</h3><p>{lens[1]}</p></article>)}</div>
    </section>

    <section className="format" id="format"><div className="shell">
      <div className="sectionLabel">04 — {t.formatEyebrow}</div>
      <div className="formatIntro"><h2>{lines(t.formatTitle)}</h2><p>{t.formatText}</p></div>
      <div className="steps">{t.steps.map(step => <article key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div>
    </div></section>

    <section className="hosts"><div className="shell">
      <div className="sectionLabel">05 — {t.hostsEyebrow}</div>
      <div className="hostsIntro"><h2>{lines(t.hostsTitle)}</h2><div className="hostMark" aria-hidden="true"><span>2</span><i /></div></div>
      <div className="hostGrid">
        <article className="hostCard hostCardPhoto">
          <div className="hostPortrait"><Image src="/snezhana.jpg" alt={`${t.hosts[0][0]} — ${t.hosts[0][1]}`} fill sizes="(max-width: 650px) 100vw, (max-width: 900px) 55vw, 38vw" /></div>
          <div className="hostInfo"><span>01</span><h3>{t.hosts[0][0]}</h3><p>{t.hosts[0][1]}</p><a href="https://t.me/SnezhaBil" target="_blank" rel="noreferrer">@SnezhaBil <i aria-hidden="true">↗</i></a></div>
        </article>
        <article className="hostCard hostCardType">
          <div className="hostCompass" aria-hidden="true"><i /><i /><span>ο</span></div>
          <div className="hostInfo"><span>02</span><h3>{t.hosts[1][0]}</h3><p>{t.hosts[1][1]}</p><a href="tel:+380670092929">+380 67 009 29 29</a><a href="https://t.me/Anton8848" target="_blank" rel="noreferrer">@Anton8848 <i aria-hidden="true">↗</i></a></div>
        </article>
      </div>
    </div></section>

    <section className="values shell" id="principles">
      <div className="sectionLabel">06 — {t.valuesEyebrow}</div>
      <div className="valuesGrid"><h2>{lines(t.valuesTitle)}</h2><div>{t.values.map((value, index) => <article key={value[0]}><span>{index + 1}</span><h3>{value[0]}</h3><p>{value[1]}</p></article>)}</div></div>
    </section>

    <section className="visit" id="visit"><div className="shell">
      <div className="sectionLabel">07 — {t.finalEyebrow}</div>
      <h2>{t.finalTitle}</h2><p className="visitIntro">{t.finalText}</p>
      <div className="visitCard"><div><span>{t.addressLabel}</span><b>{t.meta[1]}</b><small>{t.meta[2]}</small></div><div><span>{t.dateLabel}</span><b>{t.meta[0]}</b></div><a href="https://t.me/kudlai_veronika" target="_blank" rel="noreferrer">{t.cta}<span>↗</span></a></div>
      <aside className="adminContact" aria-labelledby="admin-contact-name">
        <div className="adminContactLabel">{t.contactEyebrow}</div>
        <div className="adminContactIntro"><h3 id="admin-contact-name">{t.contactName}</h3><span>{t.contactRole}</span><p>{t.contactText}</p></div>
        <div className="adminContactLinks"><a href="tel:+380682641212">+380 68 264 12 12</a><a href="https://t.me/kudlai_veronika" target="_blank" rel="noreferrer">@kudlai_veronika <span aria-hidden="true">↗</span></a></div>
      </aside>
    </div></section>

    <footer className="shell"><div className="brand"><b>cinema</b><span>.vision</span></div><p>{t.footer}</p><div className="footerLang"><Link aria-current={lang === "uk" ? "page" : undefined} href="/">UA</Link><Link aria-current={lang === "ru" ? "page" : undefined} href="/ru">RU</Link><Link aria-current={lang === "en" ? "page" : undefined} href="/en">EN</Link></div><small>© 2026 · {t.rights}</small></footer>
  </main>;
}
